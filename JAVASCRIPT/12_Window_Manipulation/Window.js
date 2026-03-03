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
