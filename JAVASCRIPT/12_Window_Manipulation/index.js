let mydiv = document.querySelector("#mydiv");

let newElement = document.createElement("span");
newElement.textContent = "This is a new element";

mydiv.appendChild(newElement) // This method allows you to add a new element as a child of a specific element.

mydiv.insertAdjacentElement("beforebegin", newElement) // This method allows you to insert a new element before a specific element.

mydiv.insertAdjacentElement("afterbegin", newElement) // This method allows you to insert a new element as the first child of a specific element.

mydiv.insertAdjacentElement("beforeend", newElement) // This method allows you to insert a new element as the last child of a specific element.

mydiv.insertAdjacentElement("afterend", newElement) // This method allows you to insert a new element after a specific element.

let parent = document.querySelector("#mydiv");
let child = document.querySelector("#para");

parent.removeChild(child) // This method allows you to remove a specific child element from a parent element.



