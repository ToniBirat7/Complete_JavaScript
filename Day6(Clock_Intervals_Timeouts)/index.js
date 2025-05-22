const btn = document.getElementById("btn");

const showTime = () => {
  const currTime = new Date();
  console.log(currTime);

  const time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`;
  console.log(time);

  document.getElementById("class-time").innerText = time;
};

showTime();

let interval;
let toggle = true;

function startInterval() {
  interval = setInterval(showTime, 1000);
}

startInterval(); // Start initially

btn.addEventListener("click", () => {
  if (toggle) {
    btn.innerText = "Resume Time";
    toggle = false;
    clearInterval(interval);
  } else {
    btn.innerText = "Pause Time";
    toggle = true;
    startInterval();
  }
});
