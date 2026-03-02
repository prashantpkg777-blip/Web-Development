// obj changing

let obj1 = {
  name: "John",
  age: 30,
};
let obj2 = obj1;

obj2.name = "Jane";
console.log(obj1.name); // Jane

// obj cloning

  // 1. spread operator

  let src = {
    name: "Prashant",
    age: 22,
    wt:60,

  };
  let dest = {...src};
   
  src.age = 18;
  
  console.log("src", src);
  console.log("dest", dest);

  // 2. Object.assign()

  let src2 = {
    value: 100,
    color: "black",
  };

  let dest2 = Object.assign({},src, src2);
  console.log("src2", src2);
  console.log("dest2", dest2);

  // 3. iteration method

  let src3 = {
    name: "Prashant",
    age: 22,
    wt:60,
    ht: 5.8,

  };

  let dest3 = {};

  for (let key in src3) {
    let newkey = key.toUpperCase();
    let newvalue = src3[key];
    // insert new key value pair in dest3 and create a clone
    dest3[newkey] = newvalue;
  }

  src3.age = 18;
  
  console.log("src3", src3);
  console.log("dest3", dest3);

