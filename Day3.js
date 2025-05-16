// const btn = document.getElementById("btn");
// console.log(btn);

// const firstDiv = document.querySelector(".block");

// btn.addEventListener("click", () => {
//   console.log("I am clicked");

//   const ele = document.createElement("h1");
//   ele.innerText = "Hi I am Birat Gautam";

//   console.log(ele.innerText);

//   firstDiv.appendChild(ele);
// });

// Promise

let a = 10;
let b = 20;

let result = a + b;

async function getData() {
  try {
    console.log("we are inside the async function");

    // Start both fetches in parallel
    const results = await Promise.allSettled([
      fetch("https://jsonplaceholder.typicode.com/todos/1"),
      fetch("https://jsonplaceholder.typicode.com/todos/2"),
      fetch("https://jsonplaceholder.typicode.com/invalid-url"), // Adding a failing URL
    ]);

    // Process each result individually
    results.forEach((result, index) => {
      if (result.status === "fulfilled") {
        console.log(`Result${index + 1} (Success)`, result.value);
      } else {
        console.error(`Result${index + 1} (Failed)`, result.reason);
      }
    });
  } catch (error) {
    console.error("Unexpected error:", error);
  }
}

getData();
console.log(result);
