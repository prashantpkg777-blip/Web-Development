// Error
// Run-time error
  
  // Reference error
  // console.log(x); // x is not defined
  

// Compile-time error
  // syntax error
  // console.log("Hello World" // missing closing parenthesis


// Error handling
  // try-catch block

  try {
    console.log("Try Block Started");
    console.log(x); // x is not defined
    console.log("Try Block Ended");
  } 
  catch (error) {
    console.log("Catch Block Started");
    console.log("Error aagaya hai babu", error);
    console.log("An error occurred:", error.message);
  }

  // try-catch-finally block
  
  try {
    console.log("Try Block Started");
    console.log(x); // x is not defined
    console.log("Try Block Ended");
  } 
  catch (error) {
    console.log("Catch Block Started");
    console.log("Error aagaya hai babu", error);
    console.log("An error occurred:", error.message);
  }
  finally {
    // finally block always executes
    console.log("Finally Block Executed");
  }

  // throw keyword -> throw keyword is used to throw an error manually. It can be used to create custom errors.

  try {
    let age = -5;
    if (age < 0) {
      throw new Error("Age cannot be negative");
    }
  }
  catch (error) {
    console.log("Error aagaya hai babu", error);
    console.log("An error occurred:", error.message);
  }


  let errorCode = 404;
  if (errorCode === 404) {
  throw new Error("Page not found");
  }
  