// Coomon Built-in Objects

console.log("Hello World!");

// Math Object
console.log(Math.PI);

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));
console.log(Math.round(3.14));
console.log(Math.ceil(3.14));
console.log(Math.floor(3.14));
console.log(Math.abs(-5));
console.log(Math.sqrt(16));
console.log(Math.pow(2, 3));

console.log(Math.random());

// Date Object

const current = new Date();
console.log(current);
console.log(current.getFullYear());
console.log(current.getMonth() + 1);

let date = new Date("2003 april 22 12:56 ");
console.log(date);

let date2 = new Date(2003, 3, 22, 12, 56);
console.log(date2);

console.log(date.getDate());
console.log(date2.getDay());
console.log(date2.setFullYear(2007));