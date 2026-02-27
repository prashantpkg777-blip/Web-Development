// Temporal Dead Zone (TDZ) Example

// The Temporal Dead Zone is the period between the start of a block and the point where a variable is declared. 
// During this time, the variable cannot be accessed and will throw a ReferenceError if you try to use it.

console.log(name); // Error: Cannot access 'name' before initialization
console.log("Prashant");
console.log("gautam");
let name = "Prashant Gautam";
console.log(name); // Prashant Gautam

// TDZ in let and const only