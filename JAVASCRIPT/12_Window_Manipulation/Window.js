// Window = global object in JavaScript that represents the browser window. It provides various properties and methods to interact with the browser and manipulate the content of the web page.

// Three types of window manipulation:

  // 1. DOM Manipulation -> Manipulating the Document Object Model (DOM) to change the content and structure of the web page.

  // 2. BOM Manipulation -> Manipulating the Browser Object Model (BOM) to interact with the browser and control its behavior.

  // 3. JS core manipulation -> Manipulating the core JavaScript features and functionalities to enhance the behavior of the web page.


// Ways to change the HTML content of a web page:

document.getElementById("fpara")

document.getElementsByClassName("textmatter")

document.getElementsByTagName("p")

document.querySelector("#fpara")

document.querySelectorAll(".textmatter")

let element = document.querySelector(".fdiv")

element.innerHTML = "New content" // This property allows you to change the HTML content of a specific element.

element.outerHTML = "<p>New content</p>" // This property allows you to change the entire HTML structure of a specific element, including the element itself.

element.textContent = "New content" // This property allows you to change the text content of a specific element, without affecting any HTML tags or structure.

element.innerText = "New content" // This property allows you to change the visible text content of a specific element, taking into account any CSS styles that may affect the display of the text.


// Ways to change the CSS styles of a web page:

element.style.color = "red" // This property allows you to change the color of a specific element.

element.style.fontSize = "20px" // This property allows you to change the font size of a specific element.

element.style.cssText = "color: red; font-size: 20px;" // This property allows you to change multiple CSS styles at once by setting the entire CSS text.

element.style.attributeName = "value" // This property allows you to change a specific CSS property by setting its name and value.

element.classList.add("new-class") // This method allows you to add a new CSS class to a specific element.

element.classList.remove("old-class") // This method allows you to remove an existing CSS class from a specific element.

element.classList.toggle("active") // This method allows you to toggle a CSS class on or off for a specific element.

element.classList.contains("active") // This method allows you to check if a specific element has a certain CSS class.

element.classList.replace("old-class", "new-class") // This method allows you to replace an existing CSS class with a new one for a specific element.

element.classList.item(0) // This method allows you to get the name of a CSS class at a specific index for a specific element.
