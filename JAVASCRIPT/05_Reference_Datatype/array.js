//array = collection of items / elements stored in a single variable
// array is also a object in javascript

// array creation
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(typeof arr); // object

// array can also store different types of data
let arr2 = ["Prashant", "Gautam", 22, "60kg", "170cm", ["coding", "gaming", "travelling"]];
console.log(arr2);
console.log(typeof arr2); // object

// array constructor
let brr = new Array("Prashant", 22, true, null, undefined);
console.log(brr);
console.log(typeof brr); // object

// indexing in array
// index[n] = 0 --- n-1
console.log(arr[0]); // 1
console.log(arr[4]); // 5
console.log(arr2[0]); // "Prashant"
console.log(arr2[5]); // ["coding", "gaming", "travelling"]
console.log(arr2[5][0]); // "coding"
console.log(brr[5]); // undefined

//built-in array methods

// push() - adds an element to the end of the array
arr.push(6);
console.log(arr); // [1, 2, 3, 4, 5, 6]

// pop() - removes the last element from the array
arr.pop();
console.log(arr); // [1, 2, 3, 4, 5]

// shift() - removes the first element from the array
arr.shift();
console.log(arr); // [2, 3, 4, 5]

// unshift() - adds an element to the beginning of the array
arr.unshift("prashant");
console.log(arr); // [prashant, 2, 3, 4, 5]

// slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)

arr.slice(1, 4); // [2, 3, 4]
console.log(arr); // [prashant, 2, 3, 4, 5] - original array is not modified

// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

arr.splice(1, 2, "hello", "world"); 
console.log(arr); // [prashant, hello, world, 4, 5] - original array is modified

// map() - creates a new array populated with the results of calling a provided function on every element in the calling array

let arr1 = [10, 20, 30, 40, 50];

let ansArr = arr1.map((element) => {
  return element * element;
})
console.log(ansArr);

// filter() - creates a new array with all elements that pass the test implemented by the provided function

let ansArr2 = arr1.filter((element) => {
  return element > 25;
})
console.log(ansArr2); // [30, 40, 50]

let ans = brr.filter((element) => {
  return (typeof (element) === "string");
})
console.log(ans);

// reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value
arr1 = [10, 20, 30, 40, 50];
let ans1 = arr1.reduce((acc, curr) => {
  return acc + curr;
}, 0);
console.log(ans1); // 150

// sort() - sorts the elements of an array in place and returns the sorted array
let arr3 = [5, 2, 9, 1, 5, 6];
arr3.sort();
console.log(arr3); // [1, 2, 5, 5, 6, 9] - default sort is in ascending order

arr3.sort((a, b) => {
  return b - a;
});
console.log(arr3); // [9, 6, 5, 5, 2, 1] - sort in descending order

// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present

console.log(arr3.indexOf(5)); // 2
console.log(arr3.indexOf(10)); // -1 - element not found in the array

// find() - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

let ans2 = arr3.find((element) => {
  return element > 5;
})
console.log(ans2); // 9 - first element greater than 5 in the array

// for loop to iterate over array
for (let i = 0; i < arr3.length; i++) {
  console.log(arr3[i]);
}
// forEach() - executes a provided function once for each array element

arr3.forEach((element, index) => {
  console.log("element:", element, "index:", index);
});

// length of array
console.log("Length of arr3:", arr3.length); // 6

// for in loop

for (let index in arr3) {
  console.log("index:", index, "element:", arr3[index]);

}

// for of loop

let fullname = "Prashant Gautam";

for (let element of fullname) {
  console.log("element:", element);
}

// use

arr1 = [10, 20, 30, 40, 50];
let getSum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(getSum(arr1));