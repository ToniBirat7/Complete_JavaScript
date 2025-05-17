console.log("We are live");

const btn = document.getElementById("btn");
const input = document.getElementById("cityInput");
const container = document.querySelector(".container");

console.log(input);

function addElement(ele) {
  container.appendChild(ele);
}

async function getData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=845cf1c94190bb7665516f55d57df164`;
  console.log("city ", url);
  const promise = await fetch(url);

  return await promise.json();
}

btn.addEventListener("click", async () => {
  const weatherData = [];

  const cityName = input.value;

  const result = await getData(cityName);
  console.log("Data : ", result);

  const cName = document.createElement("h1");
  const temp = document.createElement("h1");
  const humidity = document.createElement("h1");
  const sky = document.createElement("h1");

  cName.innerText = `City : ${result.name}`;
  temp.innerText = `City : ${result.main.temp}`;
  humidity.innerText = `City : ${result.main.humidity}`;
  sky.innerText = `City : ${result.weather[0].description}`;

  weatherData.push(cName);
  weatherData.push(temp);
  weatherData.push(humidity);
  weatherData.push(sky);

  weatherData.forEach((item) => {
    addElement(item);
  });
});
