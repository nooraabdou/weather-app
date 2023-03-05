let currentDate = document.querySelector("#dates");
let now = new Date();
let hours = now.getHours();
let minutes = now.getMinutes();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDate.innerHTML = `${days[2]} ${hours}:${minutes}`;

function callbackApi(response) {
  let temperature = document.querySelector("#degree");
  let description = document.querySelector("#clear");
  let windElement = document.querySelector("#wind");
  let humididtyElement = document.querySelector("#humidity");
  let cityElement = document.querySelector("#city");
  let iconElement = document.querySelector("#icon");
  temperature.innerHTML = Math.round(response.data.main.temp);
  description.innerHTML = response.data.weather[0].description;
  cityElement.innerHTML = response.data.name;
  humididtyElement.innerHTML = `Humidity ${response.data.main.humidity}%`;
  windElement.innerHTML = `Wind ${Math.round(response.data.wind.speed)} km/h`;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function search(city) {
  let apiKey = "ebef9ca4a8de66ed586fac628fade056";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(callbackApi);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", handleSubmit);
