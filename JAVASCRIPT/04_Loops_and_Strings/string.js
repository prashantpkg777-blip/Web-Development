let firstName = "Prashant";
console.log(firstName);

let lastName = 'Gautam';
console.log(lastName);

let name =`Prashant
Gautam
hello. guys`;
console.log(name);

let names = new String("Prashant Gautam");
console.log(names);

// concatination

let fullName = firstName + " " + lastName;
console.log(fullName);

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

let ans = firstName + lastName;
console.log(ans);

// length of string

console.log(firstName.length);
console.log(lastName.length);

// change case

console.log(firstName.toUpperCase());
console.log(lastName.toLowerCase());

// substring
// index[n] = 0 --- n-1

console.log(firstName.substring(2, 4)); // 2 se start hoke 4 se pehle tak ka substring dega
console.log(lastName.substring(0, 3));
console.log(firstName.substring(2)); // agar end index nahi diya to start index se end tak ka substring dega

// slit and join

let sentence =  "hello jii kaise ho aap sab";
let word = sentence.split(" "); // sentence ko space ke basis pe split karke array bana denge
console.log(word);

let newSentence = word.join(" "); // array ke elements ko space ke basis pe join karke sentence bana denge
console.log(newSentence);