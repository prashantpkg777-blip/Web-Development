// class

class Human {
  // properties
  name = "Prashant";
  age = 22; // public by default
  #wt = 60; // private property
  ht = 5.6;

  constructor(newAge, newHt, newWt) {
    this.age = newAge;
    this.ht = newHt;
    this.#wt = newWt;
  }

  // behavior
  walking() {
    console.log("Human is walking");

  }
  running() {
    console.log("Human is running at speed:");
  }
  // method to access private property
  wt1() {
    return this.#wt;
  }

  get fetchWt() {
    return this.#wt + 5; // example of modifying private property value
  }
  
  set modifiedWt(newWt) {
    this.#wt = newWt; // example of setting private property value
  }

}

let obj = new Human(18, 5.8, 70);

console.log(obj.name);
console.log(obj.age);
// console.log(obj.#wt); // error: private property cannot be accessed outside the class

obj.walking();
obj.running();

console.log(obj.wt1()); // accessing private property through a public method

console.log(obj.fetchWt); // accessing modified private property value
obj.modifiedWt = 65; // setting new value to private property through setter

console.log(obj.wt1()); // accessing updated private property value through public method

