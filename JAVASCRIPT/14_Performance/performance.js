//Reflow => Recalculating the positions and geometries of elements in the document. This can be triggered by changes to the DOM, CSS, or layout.

//Repaint => Redrawing the pixels on the screen to reflect changes in the visual appearance of elements. This can be triggered by changes to the styles, colors, or visibility of elements.

// Both reflow and repaint can be expensive operations, especially if they occur frequently or involve a large number of elements. To optimize performance, it's important to minimize the number of reflows and repaints by batching DOM changes together and using techniques like document fragments or virtual DOM.

// Document Fragment => A lightweight container that can hold a portion of the DOM. It allows you to make changes to the DOM without triggering reflow and repaint until you append the fragment to the document. This can improve performance by reducing the number of reflows and repaints that occur when making multiple changes to the DOM.

