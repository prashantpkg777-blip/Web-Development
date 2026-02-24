// object = a collection of properties, where each property has a key and a value.

let obj = {
  name: "Prashant",
  "full name": "Prashant Gautam",
  age : 22,
  weight : "60kg",
  height : "170cm",
  hobbies : ["coding", "gaming", "travelling"],
  greet : function() {
    console.log("Hello, I am " + this.name);
  }
}

console.log(obj);
console.log(obj.name);
obj.greet();

console.log(typeof obj); // object

let obj2 = obj; // obj2 is a reference to the same object as obj
console.log(obj2);
obj2.name = "Rahul";
console.log(obj); // obj.name will also change to "Rahul" because obj and obj2 reference the same object