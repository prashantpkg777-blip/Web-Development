// if-else 

  let age = 25;
  if (age>=18) {
    console.log("You are an adult.");
  } else {
    console.log("You are a minor.");
  }

// if else if ladder

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}

// Switch statement

let score2 = 85;

switch (true) {
  case score2 >= 90:
    console.log("Grade: A");
    break;
  case score2 >= 80:
    console.log("Grade: B");
    break;
  case score2 >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: D");
}