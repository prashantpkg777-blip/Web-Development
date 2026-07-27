
(function () {
  "use strict";

  /* ---------------- CONFIG ---------------- */
  const CURRENCY = "₹";
  const FREE_SHIPPING_THRESHOLD = 999;
  const FLAT_SHIPPING_FEE = 79;
  const TAX_RATE = 0.05;

  const KEYS = {
    cart: "myntra_cart_v1",
    wishlist: "myntra_wishlist_v1",
    orders: "myntra_orders_v1",
    address: "myntra_address_v1",
  };

  /* ---------------- STATE ---------------- */
  const State = {
    cart: load(KEYS.cart, []),
    wishlist: load(KEYS.wishlist, []),
    orders: load(KEYS.orders, []),
    address: load(KEYS.address, null),
  };

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function save(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }
  const persistCart = () => save(KEYS.cart, State.cart);
  const persistWishlist = () => save(KEYS.wishlist, State.wishlist);
  const persistOrders = () => save(KEYS.orders, State.orders);
  const persistAddress = () => save(KEYS.address, State.address);

  function money(n) {
    return CURRENCY + Number(n).toLocaleString("en-IN", { maximumFractionDigits: 2 });
  }
  function uid(prefix) {
    return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // Deterministic "price" derived from the image filename, so the
  // same product always shows the same price across page loads.
  function priceFromSrc(src) {
    let hash = 0;
    for (let i = 0; i < src.length; i++) {
      hash = (hash * 31 + src.charCodeAt(i)) >>> 0;
    }
    return 499 + (hash % 25) * 100; // 499 - 2899, steps of 100
  }

  /* ---------------- INJECTED STYLES ---------------- */
  const css = `
  .st-overlay{position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:9998;opacity:0;pointer-events:none;transition:opacity .25s ease;}
  .st-overlay.st-open{opacity:1;pointer-events:auto;}
  .st-panel{position:fixed;top:0;right:0;height:100%;width:min(420px,92vw);background:#fff;z-index:9999;
    box-shadow:-8px 0 30px rgba(0,0,0,.15);transform:translateX(100%);transition:transform .3s ease;
    display:flex;flex-direction:column;color:#282c3f;}
  .st-panel.st-open{transform:translateX(0);}
  .st-panel-header{padding:16px 20px;border-bottom:1px solid #eee;display:flex;justify-content:space-between;align-items:center;}
  .st-panel-header h2{margin:0;font-size:18px;font-weight:700;}
  .st-close{background:none;border:none;font-size:22px;cursor:pointer;color:#282c3f;line-height:1;}
  .st-panel-body{flex:1;overflow-y:auto;padding:12px 20px;}
  .st-panel-footer{padding:16px 20px;border-top:1px solid #eee;}
  .st-item{display:flex;gap:12px;padding:12px 0;border-bottom:1px solid #f2f2f2;}
  .st-item img{width:64px;height:80px;object-fit:cover;border-radius:4px;background:#f5f5f6;}
  .st-item-info{flex:1;}
  .st-item-name{font-weight:600;font-size:14px;margin:0 0 4px;}
  .st-item-price{font-size:13px;color:#282c3f;font-weight:700;}
  .st-qty-row{display:flex;align-items:center;gap:8px;margin-top:6px;}
  .st-qty-btn{width:26px;height:26px;border:1px solid #d4d5d9;background:#fff;border-radius:4px;cursor:pointer;font-size:14px;}
  .st-remove{background:none;border:none;color:#ff3f6c;font-size:12px;cursor:pointer;margin-top:6px;padding:0;}
  .st-empty{text-align:center;color:#94969f;padding:40px 10px;font-size:14px;}
  .st-btn{width:100%;padding:12px;background:#ff3f6c;color:#fff;border:none;border-radius:4px;font-size:15px;font-weight:700;cursor:pointer;text-transform:uppercase;letter-spacing:.5px;}
  .st-btn:disabled{background:#e0e0e0;color:#999;cursor:not-allowed;}
  .st-btn.secondary{background:#fff;color:#ff3f6c;border:1px solid #ff3f6c;margin-top:8px;}
  .st-summary-row{display:flex;justify-content:space-between;font-size:14px;padding:4px 0;color:#535766;}
  .st-summary-row.total{font-weight:800;color:#282c3f;font-size:16px;border-top:1px dashed #ddd;margin-top:6px;padding-top:10px;}
  .st-field{margin-bottom:12px;}
  .st-field label{display:block;font-size:12px;font-weight:700;color:#535766;margin-bottom:4px;text-transform:uppercase;}
  .st-field input,.st-field select{width:100%;padding:10px;border:1px solid #d4d5d9;border-radius:4px;font-size:14px;box-sizing:border-box;}
  .st-row2{display:flex;gap:10px;}
  .st-row2 .st-field{flex:1;}
  .st-confirm{text-align:center;padding:20px 10px;}
  .st-confirm .st-check{width:64px;height:64px;border-radius:50%;background:#03a685;color:#fff;
    display:flex;align-items:center;justify-content:center;font-size:34px;margin:0 auto 16px;}
  .st-toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%) translateY(20px);background:#282c3f;color:#fff;
    padding:10px 18px;border-radius:6px;font-size:14px;z-index:10000;opacity:0;transition:all .25s ease;pointer-events:none;}
  .st-toast.st-show{opacity:1;transform:translateX(-50%) translateY(0);}
  .st-step-tabs{display:flex;gap:6px;margin-bottom:14px;}
  .st-step-tabs span{flex:1;text-align:center;font-size:11px;font-weight:700;padding:6px 4px;border-radius:4px;background:#f5f5f6;color:#94969f;}
  .st-step-tabs span.active{background:#ff3f6c;color:#fff;}

  /* Icon badge (bag / wishlist counters) */
  .icon_item{position:relative;}
  .st-badge{position:absolute;top:0;right:6px;background:#ff3f6c;color:#fff;border-radius:50%;
    min-width:16px;height:16px;font-size:10px;display:none;align-items:center;justify-content:center;padding:0 3px;font-weight:700;}

  /* Product card overlay for each category item */
  .st-product-wrap{position:relative;display:inline-block;}
  .st-product-overlay{position:absolute;inset:0;background:linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0) 55%);
    opacity:0;transition:opacity .2s ease;display:flex;flex-direction:column;justify-content:flex-end;padding:10px;border-radius:6px;}
  .st-product-wrap:hover .st-product-overlay{opacity:1;}
  .st-product-price{color:#fff;font-weight:700;font-size:13px;margin-bottom:6px;}
  .st-product-actions{display:flex;gap:6px;}
  .st-add-btn{flex:1;background:#ff3f6c;color:#fff;border:none;border-radius:4px;padding:8px 6px;font-size:12px;font-weight:700;cursor:pointer;text-transform:uppercase;}
  .st-wish-btn{width:34px;background:#fff;border:none;border-radius:4px;font-size:16px;cursor:pointer;}
  .st-wish-btn.active{color:#ff3f6c;}
  @media (max-width:480px){.st-panel{width:100vw;}}
  `;
  const styleTag = document.createElement("style");
  styleTag.textContent = css;
  document.head.appendChild(styleTag);

  /* ---------------- PANEL SCAFFOLD ---------------- */
  const overlay = document.createElement("div");
  overlay.className = "st-overlay";
  document.body.appendChild(overlay);

  const cartPanel = document.createElement("div");
  cartPanel.className = "st-panel";
  document.body.appendChild(cartPanel);

  const checkoutPanel = document.createElement("div");
  checkoutPanel.className = "st-panel";
  document.body.appendChild(checkoutPanel);

  const wishlistPanel = document.createElement("div");
  wishlistPanel.className = "st-panel";
  document.body.appendChild(wishlistPanel);

  const toast = document.createElement("div");
  toast.className = "st-toast";
  document.body.appendChild(toast);

  let toastTimer = null;
  function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add("st-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("st-show"), 2200);
  }

  function closeAllPanels() {
    [cartPanel, checkoutPanel, wishlistPanel].forEach((p) => p.classList.remove("st-open"));
    overlay.classList.remove("st-open");
  }
  overlay.addEventListener("click", closeAllPanels);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeAllPanels(); });
  function openPanel(panel) {
    closeAllPanels();
    overlay.classList.add("st-open");
    panel.classList.add("st-open");
  }

  /* ---------------- CART ---------------- */
  function addToCart(product, qty = 1) {
    const existing = State.cart.find((i) => i.id === product.id);
    if (existing) existing.qty += qty;
    else State.cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, qty });
    persistCart();
    renderCart();
    updateBadges();
    showToast(`${product.name} added to bag`);
  }
  function removeFromCart(id) {
    State.cart = State.cart.filter((i) => i.id !== id);
    persistCart(); renderCart(); updateBadges();
  }
  function changeQty(id, delta) {
    const item = State.cart.find((i) => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) return removeFromCart(id);
    persistCart(); renderCart(); updateBadges();
  }
  function cartSubtotal() { return State.cart.reduce((s, i) => s + i.price * i.qty, 0); }
  function cartCount() { return State.cart.reduce((s, i) => s + i.qty, 0); }
  function shippingFee(sub) { return State.cart.length === 0 ? 0 : (sub >= FREE_SHIPPING_THRESHOLD ? 0 : FLAT_SHIPPING_FEE); }
  function taxAmount(sub) { return sub * TAX_RATE; }
  function orderTotal() { const s = cartSubtotal(); return s + shippingFee(s) + taxAmount(s); }

  function renderCart() {
    const sub = cartSubtotal(), ship = shippingFee(sub), tax = taxAmount(sub), total = sub + ship + tax;
    let itemsHtml = State.cart.length === 0
      ? `<div class="st-empty">Your bag is empty.<br>Start adding items you love!</div>`
      : State.cart.map((i) => `
        <div class="st-item">
          <img src="${i.image || ""}" alt="${escapeHtml(i.name)}">
          <div class="st-item-info">
            <p class="st-item-name">${escapeHtml(i.name)}</p>
            <div class="st-item-price">${money(i.price)}</div>
            <div class="st-qty-row">
              <button class="st-qty-btn" data-act="dec" data-id="${i.id}">−</button>
              <span>${i.qty}</span>
              <button class="st-qty-btn" data-act="inc" data-id="${i.id}">+</button>
            </div>
            <button class="st-remove" data-act="remove" data-id="${i.id}">Remove</button>
          </div>
        </div>`).join("");

    cartPanel.innerHTML = `
      <div class="st-panel-header"><h2>My Bag (${cartCount()})</h2><button class="st-close" data-act="close">&times;</button></div>
      <div class="st-panel-body">${itemsHtml}</div>
      ${State.cart.length ? `
        <div class="st-panel-footer">
          <div class="st-summary-row"><span>Subtotal</span><span>${money(sub)}</span></div>
          <div class="st-summary-row"><span>Shipping</span><span>${ship === 0 ? "FREE" : money(ship)}</span></div>
          <div class="st-summary-row"><span>Tax (GST ${Math.round(TAX_RATE * 100)}%)</span><span>${money(tax)}</span></div>
          <div class="st-summary-row total"><span>Total</span><span>${money(total)}</span></div>
          ${sub < FREE_SHIPPING_THRESHOLD ? `<div style="font-size:12px;color:#03a685;margin:6px 0;">Add ${money(FREE_SHIPPING_THRESHOLD - sub)} more for FREE shipping</div>` : ""}
          <button class="st-btn" data-act="checkout">Place Order / Checkout</button>
        </div>` : ""}
    `;

    cartPanel.querySelectorAll("[data-act]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const { act, id } = e.currentTarget.dataset;
        if (act === "close") closeAllPanels();
        if (act === "inc") changeQty(id, 1);
        if (act === "dec") changeQty(id, -1);
        if (act === "remove") removeFromCart(id);
        if (act === "checkout" && State.cart.length) openCheckout();
      });
    });
  }

  /* ---------------- WISHLIST ---------------- */
  function toggleWishlist(product) {
    const idx = State.wishlist.findIndex((i) => i.id === product.id);
    if (idx >= 0) { State.wishlist.splice(idx, 1); showToast("Removed from wishlist"); }
    else { State.wishlist.push(product); showToast("Added to wishlist"); }
    persistWishlist(); renderWishlist(); updateBadges();
    document.querySelectorAll(`.st-wish-btn[data-id="${product.id}"]`).forEach((b) => b.classList.toggle("active", idx < 0));
  }
  function isWishlisted(id) { return State.wishlist.some((i) => i.id === id); }

  function renderWishlist() {
    let itemsHtml = State.wishlist.length === 0
      ? `<div class="st-empty">Your wishlist is empty.</div>`
      : State.wishlist.map((i) => `
        <div class="st-item">
          <img src="${i.image || ""}" alt="${escapeHtml(i.name)}">
          <div class="st-item-info">
            <p class="st-item-name">${escapeHtml(i.name)}</p>
            <div class="st-item-price">${money(i.price)}</div>
            <button class="st-btn" style="margin-top:8px;padding:8px;font-size:12px;" data-act="move" data-id="${i.id}">Move to Bag</button>
            <button class="st-remove" data-act="remove" data-id="${i.id}">Remove</button>
          </div>
        </div>`).join("");

    wishlistPanel.innerHTML = `
      <div class="st-panel-header"><h2>Wishlist (${State.wishlist.length})</h2><button class="st-close" data-act="close">&times;</button></div>
      <div class="st-panel-body">${itemsHtml}</div>
    `;
    wishlistPanel.querySelectorAll("[data-act]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const { act, id } = e.currentTarget.dataset;
        if (act === "close") closeAllPanels();
        if (act === "remove") {
          State.wishlist = State.wishlist.filter((i) => i.id !== id);
          persistWishlist(); renderWishlist(); updateBadges();
          document.querySelectorAll(`.st-wish-btn[data-id="${id}"]`).forEach((b) => b.classList.remove("active"));
        }
        if (act === "move") {
          const item = State.wishlist.find((i) => i.id === id);
          if (item) {
            addToCart(item, 1);
            State.wishlist = State.wishlist.filter((i) => i.id !== id);
            persistWishlist(); renderWishlist(); updateBadges();
          }
        }
      });
    });
  }

  /* ---------------- CHECKOUT ---------------- */
  function openCheckout() { renderCheckoutStep("address"); openPanel(checkoutPanel); }

  function renderCheckoutStep(step) {
    const a = State.address || {};
    if (step === "address") {
      checkoutPanel.innerHTML = `
        <div class="st-panel-header"><h2>Checkout</h2><button class="st-close" data-act="close">&times;</button></div>
        <div class="st-panel-body">
          <div class="st-step-tabs"><span class="active">1. Shipping</span><span>2. Review</span><span>3. Confirmation</span></div>
          <form id="st-address-form">
            <div class="st-field"><label>Full Name</label><input type="text" name="fullName" value="${escapeHtml(a.fullName || "")}" required></div>
            <div class="st-row2">
              <div class="st-field"><label>Phone</label><input type="tel" name="phone" value="${escapeHtml(a.phone || "")}" required pattern="[0-9]{10}" maxlength="10" placeholder="10-digit number"></div>
              <div class="st-field"><label>Pincode</label><input type="text" name="pincode" value="${escapeHtml(a.pincode || "")}" required pattern="[0-9]{6}" maxlength="6"></div>
            </div>
            <div class="st-field"><label>Address Line</label><input type="text" name="line1" value="${escapeHtml(a.line1 || "")}" required placeholder="House no, street, area"></div>
            <div class="st-row2">
              <div class="st-field"><label>City</label><input type="text" name="city" value="${escapeHtml(a.city || "")}" required></div>
              <div class="st-field"><label>State</label><input type="text" name="state" value="${escapeHtml(a.state || "")}" required></div>
            </div>
            <div class="st-field">
              <label>Payment Method</label>
              <select name="payment">
                <option value="COD" ${a.payment === "COD" ? "selected" : ""}>Cash on Delivery</option>
                <option value="CARD" ${a.payment === "CARD" ? "selected" : ""}>Credit / Debit Card</option>
                <option value="UPI" ${a.payment === "UPI" ? "selected" : ""}>UPI</option>
              </select>
            </div>
            <button type="submit" class="st-btn">Continue to Review</button>
          </form>
        </div>`;
      checkoutPanel.querySelector("[data-act='close']").addEventListener("click", closeAllPanels);
      checkoutPanel.querySelector("#st-address-form").addEventListener("submit", (e) => {
        e.preventDefault();
        const address = Object.fromEntries(new FormData(e.target).entries());
        if (!/^[0-9]{10}$/.test(address.phone)) return showToast("Enter a valid 10-digit phone number");
        if (!/^[0-9]{6}$/.test(address.pincode)) return showToast("Enter a valid 6-digit pincode");
        State.address = address; persistAddress();
        renderCheckoutStep("review");
      });
    } else if (step === "review") {
      const sub = cartSubtotal(), ship = shippingFee(sub), tax = taxAmount(sub), total = sub + ship + tax;
      const a = State.address || {};
      checkoutPanel.innerHTML = `
        <div class="st-panel-header"><h2>Checkout</h2><button class="st-close" data-act="close">&times;</button></div>
        <div class="st-panel-body">
          <div class="st-step-tabs"><span>1. Shipping</span><span class="active">2. Review</span><span>3. Confirmation</span></div>
          <div style="background:#f5f5f6;border-radius:6px;padding:12px;margin-bottom:14px;font-size:13px;">
            <strong>Deliver to:</strong> ${escapeHtml(a.fullName)}<br>
            ${escapeHtml(a.line1)}, ${escapeHtml(a.city)}, ${escapeHtml(a.state)} - ${escapeHtml(a.pincode)}<br>
            Phone: ${escapeHtml(a.phone)}<br>
            Payment: <strong>${escapeHtml(a.payment)}</strong>
            <div><button class="st-remove" data-act="edit-address">Edit address</button></div>
          </div>
          ${State.cart.map((i) => `<div class="st-item"><img src="${i.image || ""}"><div class="st-item-info">
              <p class="st-item-name">${escapeHtml(i.name)} × ${i.qty}</p>
              <div class="st-item-price">${money(i.price * i.qty)}</div></div></div>`).join("")}
          <div class="st-summary-row"><span>Subtotal</span><span>${money(sub)}</span></div>
          <div class="st-summary-row"><span>Shipping</span><span>${ship === 0 ? "FREE" : money(ship)}</span></div>
          <div class="st-summary-row"><span>Tax</span><span>${money(tax)}</span></div>
          <div class="st-summary-row total"><span>Total</span><span>${money(total)}</span></div>
        </div>
        <div class="st-panel-footer">
          <button class="st-btn" data-act="place-order">Place Order</button>
          <button class="st-btn secondary" data-act="back">Back</button>
        </div>`;
      checkoutPanel.querySelector("[data-act='close']").addEventListener("click", closeAllPanels);
      checkoutPanel.querySelector("[data-act='edit-address']").addEventListener("click", () => renderCheckoutStep("address"));
      checkoutPanel.querySelector("[data-act='back']").addEventListener("click", () => renderCheckoutStep("address"));
      checkoutPanel.querySelector("[data-act='place-order']").addEventListener("click", placeOrder);
    } else if (step === "confirmation") {
      const order = State.orders[State.orders.length - 1];
      checkoutPanel.innerHTML = `
        <div class="st-panel-header"><h2>Checkout</h2><button class="st-close" data-act="close">&times;</button></div>
        <div class="st-panel-body">
          <div class="st-step-tabs"><span>1. Shipping</span><span>2. Review</span><span class="active">3. Confirmation</span></div>
          <div class="st-confirm">
            <div class="st-check">✓</div>
            <h3 style="margin:0 0 8px;">Order Placed!</h3>
            <p style="font-size:13px;color:#535766;">Order ID: <strong>${order.id}</strong></p>
            <p style="font-size:13px;color:#535766;">Total paid: <strong>${money(order.total)}</strong></p>
            <p style="font-size:13px;color:#535766;">Estimated delivery: <strong>${order.eta}</strong></p>
            <button class="st-btn" data-act="close" style="margin-top:16px;">Continue Shopping</button>
          </div>
        </div>`;
      checkoutPanel.querySelectorAll("[data-act='close']").forEach((b) => b.addEventListener("click", closeAllPanels));
    }
  }

  function placeOrder() {
    if (State.cart.length === 0) return;
    const total = orderTotal();
    const etaDate = new Date(); etaDate.setDate(etaDate.getDate() + 5);
    const order = {
      id: uid("ORD").toUpperCase(),
      items: JSON.parse(JSON.stringify(State.cart)),
      address: State.address,
      subtotal: cartSubtotal(),
      shipping: shippingFee(cartSubtotal()),
      tax: taxAmount(cartSubtotal()),
      total,
      date: new Date().toISOString(),
      eta: etaDate.toDateString(),
      status: "Placed",
    };
    State.orders.push(order); persistOrders();
    State.cart = []; persistCart();
    updateBadges(); renderCart(); renderCheckoutStep("confirmation");
    showToast("Order placed successfully!");
  }

  /* ---------------- BADGES ---------------- */
  function updateBadges() {
    document.querySelectorAll(".st-badge[data-for='bag']").forEach((el) => {
      el.textContent = cartCount();
      el.style.display = cartCount() > 0 ? "flex" : "none";
    });
    document.querySelectorAll(".st-badge[data-for='wishlist']").forEach((el) => {
      el.textContent = State.wishlist.length;
      el.style.display = State.wishlist.length > 0 ? "flex" : "none";
    });
  }

  /* ---------------- WIRE UP HEADER ICONS ---------------- */
  function wireHeaderIcons() {
    const bagIcon = document.getElementById("icon_bag");
    const wishlistIcon = document.getElementById("icon_wishlist");

    if (bagIcon) {
      const badge = document.createElement("span");
      badge.className = "st-badge"; badge.dataset.for = "bag";
      bagIcon.appendChild(badge);
      bagIcon.style.cursor = "pointer";
      bagIcon.addEventListener("click", () => { renderCart(); openPanel(cartPanel); });
    }
    if (wishlistIcon) {
      const badge = document.createElement("span");
      badge.className = "st-badge"; badge.dataset.for = "wishlist";
      wishlistIcon.appendChild(badge);
      wishlistIcon.style.cursor = "pointer";
      wishlistIcon.addEventListener("click", () => { renderWishlist(); openPanel(wishlistPanel); });
    }
  }

  /* ---------------- TURN PRODUCT IMAGES INTO SHOPPABLE PRODUCTS ----------------
     Every <img class="sale_item"> inside .category_items becomes hoverable
     with a price, "Add to Bag" button and wishlist heart. The
     "sale_pro" (Prashant's photo) and its <a href="#"> are skipped since
     it's a profile photo, not a product. */
  function enhanceProductImages() {
    const links = document.querySelectorAll(".category_items > a");
    links.forEach((a) => {
      if (a.dataset.stWired) return;
      const img = a.querySelector("img.sale_item");
      if (!img) return; // skip sale_pro (Prashant's photo) and anything else
      a.dataset.stWired = "1";

      const src = img.getAttribute("src");
      const name = img.getAttribute("alt") || "Product";
      const id = "prod_" + src;
      const price = priceFromSrc(src);

      a.addEventListener("click", (e) => e.preventDefault());
      a.classList.add("st-product-wrap");

      const overlay = document.createElement("div");
      overlay.className = "st-product-overlay";
      overlay.innerHTML = `
        <div class="st-product-price">${money(price)}</div>
        <div class="st-product-actions">
          <button class="st-add-btn" type="button">Add to Bag</button>
          <button class="st-wish-btn ${isWishlisted(id) ? "active" : ""}" type="button" data-id="${id}">&#9825;</button>
        </div>
      `;
      a.appendChild(overlay);

      const product = { id, name, price, image: src };

      overlay.querySelector(".st-add-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(product, 1);
      });
      overlay.querySelector(".st-wish-btn").addEventListener("click", (e) => {
        e.stopPropagation();
        toggleWishlist(product);
      });
    });
  }

  /* ---------------- INIT ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    wireHeaderIcons();
    enhanceProductImages();
    renderCart();
    renderWishlist();
    updateBadges();
  });

  /* ---------------- PUBLIC API (optional, for console/debugging) ---------------- */
  window.Store = {
    addToCart, removeFromCart, toggleWishlist,
    openCart: () => { renderCart(); openPanel(cartPanel); },
    openWishlist: () => { renderWishlist(); openPanel(wishlistPanel); },
    openCheckout,
    getCart: () => State.cart,
    getWishlist: () => State.wishlist,
    getOrders: () => State.orders,
    clearCart: () => { State.cart = []; persistCart(); renderCart(); updateBadges(); },
  };
})();