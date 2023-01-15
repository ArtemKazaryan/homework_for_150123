/* index.js */
import data from "./data.js";
import WeatherCities from "./weather-cities.js";

let showFirst = document.querySelector("#show-first");
let showLast = document.querySelector("#show-last");
let exportWeather = document.querySelector("#export-weather");

let cityCountry = document.querySelector("#city-country");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temperature");
let exportOutput = document.querySelector("#export-output");


let weatherCities = new WeatherCities(data);

function render(city) {
	cityCountry.textContent = `${city.location.name}, ${city.location.country}`;
  icon.src = city.current.weather_icons[0];
  temperature.innerHTML = city.current.temperature + "&deg;C";
}

showFirst.addEventListener("click", function() {
  let city = weatherCities.getFirst();
  render(city);
});

showLast.addEventListener("click", function() {
  let city = weatherCities.getLast();
  render(city);
});

exportWeather.addEventListener("click", function() {
  let csv = weatherCities.exportCsv();
  exportOutput.textContent = csv;
});



// Завершите класс `WeatherCities`, реализуя следующие методы экземпляра:

// • `getFirst` возвращает первый город из переменной экземпляра `cities`

// • `getLast` возвращает последний город из переменной экземпляра `cities`

// • `exportCsv` возвращает строку, содержащую название каждого города, за которой следует температура в этом городе (разделенная пробелом). Каждый город и группа температуры должны быть разделены запятой и символом пробела
