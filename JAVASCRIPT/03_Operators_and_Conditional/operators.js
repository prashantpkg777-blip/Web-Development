// Arithmatic Operators

let a= 10;
let b= 5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

// Assignment Operators

let c= 20;
c += 5;  // c = c + 5;
console.log(c);
c -= 5; // c = c - 5;
console.log(c);
c *= 5; // c = c * 5;
console.log(c);
c /= 5; // c = c / 5;
console.log(c);

// Comparison Operators

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 4); // false
console.log(5 == '5'); // true (loose equality)
console.log(5 === '5'); // false (strict equality)
console.log(5 != '5'); // false (loose inequality)
console.log(5 !== '5'); // true (strict inequality)

// Ternary Operator

let age = 18;
let canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

age = 16;
canVote = (age >= 18) ? "Yes, you can vote." : "No, you cannot vote.";
console.log(canVote);

// Logical Operators

let isAdult = true;
let hasVoterID = false;

console.log(isAdult && hasVoterID); // false
console.log(isAdult || hasVoterID); // true
console.log(!isAdult); // false
console.log(!hasVoterID); // true

// Short-circuit evaluation

let x = 10;
let y = 0;
console.log(x > 5 && y > 0); // false (y > 0 is not evaluated)
console.log(x > 5 || y > 0); // true (y > 0 is not evaluated)
console.log(false || "prashant"); // "prashant"
console.log(true && "prashant"); // "prashant"

// Bitwise Operators

let m = 5; // 0101 in binary
let n = 3; // 0011 in binary
console.log(m & n); // 1 (0001 in binary)
console.log(m | n); // 7 (0111 in binary)
console.log(m ^ n); // 6 (0110 in binary)
console.log(~m); // -6 (inverts the bits of 5)
console.log(m << 1); // 10 (0101 shifted left by 1)
console.log(m >> 1); // 2 (0101 shifted right by 1)

