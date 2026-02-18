
// function example() {
//     var x = 10;
//     console.log(x);
// }

// example();       // 10
// console.log(x);       // Throws ReferenceError: x is not defined

// // Re assignment using var
// var x = 10;
// console.log(x);    // Output : 10

// x = "Prashant";
// console.log(x);    // Output : Prashant

// var x = true;
// console.log(x);    // Output : true

// Re assignment using let
// let x = 11;
// console.log(x);    // Output : 11

// x = "Prashant";
// console.log(x);    // Output : Prashant

// // let x = true;     // SyntaxError: Identifier 'x' has already been declared

// let z = 10;
// if (true) {
//     let y = 20;
//     console.log(z); // Output: 10
//     console.log(y); // Output: 20
// }
// console.log(z); // Output: 10
// console.log(y); // Throws ReferenceError: y is not defined

// const x = 111;
// console.log(x);    // Output : 111
// x = "Prashant";   // TypeError: Assignment to constant variable.

let marks = 26.565;
console.log(marks);    // Output : 26.565
console.log(typeof marks);    // Output : number

marks = 30;
console.log(marks);    // Output : 30
console.log(typeof marks);    // Output : number

marks = "Prashant";
console.log(marks);    // Output : Prashant
console.log(typeof marks);    // Output : string

marks = true;
console.log(marks);    // Output : true
console.log(typeof marks);    // Output : boolean

marks = null;
console.log(marks);    // Output : null
console.log(typeof marks);    // Output : object

let marks1;
console.log(marks1);    // Output : undefined
console.log(typeof marks1);    // Output : undefined

let mark = 695991693687316764546498744584551146846845163854168316841815418654618456416451845413842541245n;
console.log(mark);  //Bigint  // Output : 695991693687316764546498744584551146846845163854168316841815418654618456416451845413842541245
console.log(typeof mark);  // Output : bigint

let symbol1 = Symbol("id");
console.log(symbol1);  // Output : Symbol(id)
console.log(typeof symbol1);  // Output : symbol

let obj = { name: "Prashant", age: 18 };
console.log(obj);  // Output : { name: 'Prashant', age: 18 }
console.log(typeof obj);  // Output : object