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

function search(event) {
  event.preventDefault();
  let h1 = document.querySelector("#city");
  let places = document.querySelector("#city-input");
  h1.innerHTML = places.value;
  let apiKey = "ebef9ca4a8de66ed586fac628fade056";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${places.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(callbackApi);
}

let cities = document.querySelector("#city-form");
cities.addEventListener("submit", search);

function callbackApi(response) {
  let temperature = document.querySelector("#degree");
  temperature.innerHTML = `${response.data.main.temp}°`;
}
