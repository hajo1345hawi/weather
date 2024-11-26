function changeTemperature(response) {
  let temp = document.querySelector("#temperature");
  temperature = response.data.temperature.current;
  temp.innerHTML = Math.round(temperature);
  let city = document.getElementById("city");
  city.innerHTML = response.data.city;
}
function searchCity(city) {
  let key = "28b6f2d49b39c35607o7141ac4t10fc0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
  axios.get(apiUrl).then(changeTemperature);
}
function handleSearch(event) {
  event.preventDefault();
  searchInput = document.getElementById("search-form-input");

  searchCity(searchInput.value);
}
let searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", handleSearch);
searchCity("New york");
