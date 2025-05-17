const btn = document.getElementById("btn");
const uname = document.getElementById("uname");
const inputName = document.getElementById("uInput");

console.log(btn);

btn.addEventListener("click", () => {
  const name = inputName.value;
  console.log(name);

  localStorage.setItem("uname", name);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("uname");

  if (!value) {
    console.log(value);
    uname.innerText = `UnknownUser`;
  } else {
    uname.innerText = value;
  }
});
