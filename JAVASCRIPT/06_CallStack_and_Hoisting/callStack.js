// callstack - call stack is a data structure which keeps track of the function calls in a program. It is used to manage the execution of functions and to keep track of the order in which they are called.

function second(name) {
  console.log("In second function name: " + name);
  first();
}
function first() {
  console.log("In first function");
}

second("Prashant");

// function in function

function solve(num1) {
  return function (num2) {
    return num1 + num2;
  }
}

let add = solve(5);
console.log(add(10)); // 15

// function in array

let arr = [
  function (a,b) {
    return a + b;
  },
  function (a,b) {
    return a * b;
  },
  function (a,b) {
    return a - b;
  }
];
console.log(arr[0](55,10)); // 65
console.log(arr[1](6,20)); // 120
console.log(arr[2](15,10)); // 5

// function in object

let obj = {
  name: "Prashant",
  age: 22,
  greet: function() {
    console.log("Hello, " + this.name);
  }
}
obj.greet(); // Hello, Prashant