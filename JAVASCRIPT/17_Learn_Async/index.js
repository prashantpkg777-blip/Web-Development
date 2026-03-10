async function getData() {
  setTimeout(() => {
    console.log("Data received");
  }, 2000);
  
}

let data = getData();
console.log(data); // undefined, because getData does not return anything

// fetch API example

async function getData1() {

  // get request to the API and wait for the response
  let response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // convert the response to JSON and wait for the data
  let data = await response.json();
  console.log(data);
  
}

getData1();

// post request example

async function postData() {

  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "My Post",
      body: "Prashant is learning async await",
      userId: 1
    })
  });

  let data = await response.json();
  console.log(data);

}

async function getData2() {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/101");
  let data = await response.json();
  console.log(data);
}

async function processData() {
  await postData();
  await getData2();
}

processData();
