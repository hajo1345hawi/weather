function handleSearch(event) {
  event.preventDefault();
  let h1 = document.getElementById("city");
  searchInput = document.getElementById("search-form-input");
  h1.innerHTML = searchInput.value;
}
let searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", handleSearch);
