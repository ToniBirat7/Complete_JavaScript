const btn = document.getElementById("btn");
console.log(btn);

const fname = document.getElementById("fname");

btn.addEventListener("click", () => {
  window.localStorage.setItem("Name", "Birat");
  location.reload();
});

window.addEventListener("load", () => {
  const name = localStorage.getItem("Name");
  console.log(localStorage.getItem("Name"));
  console.log("Name");

  if (!name) {
    fname.innerText = "Unknown User";
  } else {
    fname.innerText = name;
  }
});
