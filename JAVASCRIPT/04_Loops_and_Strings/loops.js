// for loop

for (let i=0; i<= 5; i++) {
  console.log("Hello, Prashant");
}

for (let i=2; i<=10*2; i+=2) {
  console.log(i);
}

for (let i=10; i>=0; i--) {
  console.log(i);
}

for (let i = 1; i<=5; i++) {
  if (i == 4) {
     break; // breaks the loop when i is 4 and exits the loop
  }
  else {
    console.log(i);
  }
}

for (let i = 1; i<=5; i++) {
  if (i == 4) {
    continue; // skips the current iteration when i is 4 and continues with the next iteration
  }
  else {
    console.log(i);
  }
}

// while loop

let j = 1;
while (j <= 5) {
  console.log(j);
  j++;
}

j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

j = 1;
while (j <= 5) {
  if (j == 4) {
    break;
  }
  else {
    console.log(j);
    j++;
  }
}

j = 1;
while (j <= 5) {
  if (j == 3) {
    j++; // increments j to 4 to avoid an infinite loop when j is 3
    continue; 
  }
  else {
    console.log(j);
    j++;
  }
}

// do-while loop

let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 5);

k = 5;
do {
  console.log(k);
  k--;
} while (k >= 1);

k = 1;
do {
  if (k == 4) {
    k++;
    continue;
  }
  console.log(k);
  k++;
} while (k <= 5);

k = 1;
do {
  if (k == 3) {
    k++;
    break;
  }
  console.log(k);
  k++;
} while (k <= 5);
