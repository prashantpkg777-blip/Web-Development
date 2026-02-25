// function - a block of code designed to perform a particular task

// function declaration
function sayMyName() {
  console.log("My name is Prashant");
}

// function call
sayMyName();

function printCounting() {
  for(let i = 1; i<= 100; i++) {
    console.log(i);
  }
}
printCounting();

// function with parameters
function getAverage(a, b) {
  let avg = (a + b) / 2;
  console.log("The average of " + a + " and " + b + " is: " + avg);

}
getAverage(55,69);
getAverage(28,38)

// return function
function getSum(a,b,c) {
  let sum = a+b+c;
  return sum;
}
let result = getSum(10,20,30);
console.log("The sum:", result);

function SayMyName(firstName, lastName) {
  let fullName = firstName + " " + lastName;
  return fullName;
}
let myName = SayMyName("Prashant", "Gautam");
console.log("Name:", myName);
console.log("Name:", SayMyName("M.S.", "Dhoni"));

// function expression
let getSquare = function(num) {
  return num**2;
}
let sqr = getSquare(5);
console.log("Square:", sqr);
console.log("Square of 10:", getSquare(10));

// arrow function
let getExponent = (x,y) =>{
  return x**y;
}
console.log("Exponent:", getExponent(2,3));
console.log("Exponent:", getExponent(5,2));
