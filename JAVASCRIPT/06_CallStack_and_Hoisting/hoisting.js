// hoisting= "lifting up" the declaration of variables and functions to the top of their scope before code execution.

// var hoisting
console.log(x); // undefined

    var x = 10;

console.log(x); // 10

// let and const hoisting

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

// console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;

// function hoisting

// function declaration hoisting
sayHello(); 
function sayHello() {
    console.log("Hello");
}

// function expression hoisting
// sayHi(); // TypeError: sayHi is not a function
let sayHi = function() {
    console.log("Hi");
}
sayHi();

// arrow function hoisting
// sayHey(); // TypeError: sayHey is not a function
let sayHey = () => {
    console.log("Hey");
}
sayHey();

// *class hoisting*

// sayHelloClass(); // ReferenceError: Cannot access 'sayHelloClass' before initialization
class sayHelloClass {
    constructor(name) {
        this.name = name;
    }   
    greet() {
        console.log("Hello, " + this.name);
    }
}
let obj = new sayHelloClass("Prashant");
obj.greet();