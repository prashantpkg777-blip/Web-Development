// Global scope variable

var age = 22;

function printAge() {
  console.log("Age: " + age);
}
printAge(); // Age: 22

// same for let and const

// Local Scope variable

function printName() {
  var name = "Prashant";
  console.log("Name: " + name);
}
printName(); // Name: Prashant
// console.log(name); // Error: name is not defined

// Block Scope variable
// var
console.log("Height: " + Height); // Error: Height is not defined
{
  var Height = 5.9; 
}
console.log("Height: " + Height); // Height: 5.9

// let and const
let width = 10;
console.log("Width: " + width); // Width: 10
{
  let width = 20;
  console.log("Width inside block: " + width); // Width inside block: 20
}
console.log("Width: " + width); // Width: 10

const pi = 3.14;
console.log("Pi: " + pi); // Pi: 3.14
{
  const pi = 3.14159;
  console.log("Pi inside block: " + pi); // Pi inside block: 3.14159
} 
console.log("Pi: " + pi); // Pi: 3.14