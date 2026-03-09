
let promises = new Promise((resolve, reject) => {
  console.log("Prashant");
  setTimeout(() => {
    resolve("Promise Resolved");
  }, 1000);
  resolve(1);
});

let promises2 = new Promise((resolve, reject) => {
  let success = false;
  if (success) {
    resolve("Promise fulfilled");
  } else {
    reject("Promise rejected");
  }
});

promises2.then((message) => {
  console.log(message);
}).catch((error) => {
  console.log(error);
});

Promise.all([promises, promises2])
  .then((values) => {
    console.log(values);
  }).catch((error) => {
    console.log(error);
  });