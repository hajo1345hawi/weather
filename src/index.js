function changeWeather(response) {
  let temp = document.querySelector("#temperature");
  temperature = response.data.temperature.current;
  temp.innerHTML = Math.round(temperature);
  let city = document.getElementById("city");
  city.innerHTML = response.data.city;
  let description = document.getElementById("description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.getElementById("humidity");
  humidity.innerHTML = response.data.temperature.humidity + `%`;
  let windSpeed = document.getElementById("wind-speed");
  windSpeed.innerHTML = response.data.wind.speed + `km/h`;
  document.getElementById("time").innerHTML = `${formatDate(new Date())}`;
}
function searchCity(city) {
  let key = "28b6f2d49b39c35607o7141ac4t10fc0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(changeWeather);
}
function handleSearch(event) {
  event.preventDefault();
  searchInput = document.getElementById("search-form-input");

  searchCity(searchInput.value);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}
let searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", handleSearch);
searchCity("New york");
