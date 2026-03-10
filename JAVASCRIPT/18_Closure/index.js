function sayMyName() {
  let Name = "Prashant Gautam";
  function displayName() {
    console.log(Name);
  }
  return displayName;
}
sayMyName(); // ƒ displayName() { console.log(Name); }
var myName = sayMyName();
myName(); // Prashant Gautam