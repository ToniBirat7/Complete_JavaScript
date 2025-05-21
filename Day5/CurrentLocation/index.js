const btn = document.getElementById("btn");
console.log(btn);

function gotPosition(location) {
  console.log("Success");
  console.log(location);
}

function failedToGetLocation() {
  console.log("Got some issue!");
}

btn.addEventListener("click", async () => {
  const loc = await navigator.geolocation.getCurrentPosition(
    gotPosition,
    failedToGetLocation
  );

  console.log("Waiting for Location Access");
});
