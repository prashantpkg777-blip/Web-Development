// Defult Parameter in JavaScript

function sayName(Fname, Lname = "Kumar") {
    console.log(`My name is ${Fname} ${Lname}`);
}

sayName("Prashant"); // Lname will take default value "Kumar"
sayName("Prashant", "Gautam"); // Lname will take provided value "Gautam"

// inserting object as default parameter
function solve(value = {age: 22, name: "Prashant"}) {
  console.log("Hello Guys",value)
}

solve();
solve({age: 30, name: "John"});

// inserting array as default parameter
function display(arr = [1, 2, 3, 4, 5]) {
  console.log("Array:", arr);
}

display();
display([10, 20, 30, 40, 50]);

// null and undefined as default parameters
display(null); // will print null
display(undefined); // will take default value [1, 2, 3, 4, 5]

// function as default parameter

function getAge(){
  return 25;
}

function details(name = "Pro", age = getAge()) {
  console.log (name, " ", age);

}

details();
details("Prashant");
details("Prashant", 22);

