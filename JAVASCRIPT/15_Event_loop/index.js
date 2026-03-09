console.log("Hello Prashant"); //synchronous code

 function setTime() {
    console.log("This is setTimeout Function");
  } 

setTimeout(setTime, 1000); //asynchronous code

console.log("The End"); //synchronous code

// Output:
// Hello Prashant
// The End
// This is setTimeout Function