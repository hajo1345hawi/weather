function changeWeather(response) {
  let temp = document.querySelector("#temperature");
  temperature = response.data.temperature.current;
  let city = document.getElementById("city");
  city.innerHTML = response.data.city;

  temp.innerHTML = Math.round(temperature);
  let description = document.getElementById("description");
  description.innerHTML = response.data.condition.description;
  let humidity = document.getElementById("humidity");
  humidity.innerHTML = response.data.temperature.humidity + `%`;
  let windSpeed = document.getElementById("wind-speed");
  windSpeed.innerHTML = response.data.wind.speed + `km/h`;
  document.getElementById("time").innerHTML = `${formatDate(new Date())}`;
  document.getElementById(
    "emoji"
  ).innerHTML = `<img src="${response.data.condition.icon_url}" alt="weather emoji">`;
}
function searchCity(city) {
  let key = "28b6f2d49b39c35607o7141ac4t10fc0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(changeWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.getElementById("search-form-input");
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
function displayForecast() {
  let days = ["mon", "tue", "wed", "thur", "fri", "sat", "sun"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `<div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌧️️</div>
            <div class="weather-forecast-temperature">19° 14°</div>
          </div>`;
  });
  let forecast = document.getElementById("forecast");
  forecast.innerHTML = forecastHtml;
}
let searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", handleSearch);
searchCity("New york");
displayForecast();
