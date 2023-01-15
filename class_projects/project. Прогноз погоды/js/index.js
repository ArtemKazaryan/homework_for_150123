/* index.js */
import data from "./data.js";
import Weather from "./weather.js";

let cityCountry = document.querySelector("#city-country");
let icon = document.querySelector("#icon");
let temperature = document.querySelector("#temperature");

let weather = new Weather(data);

cityCountry.textContent = weather.getLocation();
icon.src = weather.getIcon();
temperature.innerHTML = weather.getTemperature();


// Вам дан снимок прогноза погоды в Амстердаме за определенный день. Данные получены из API **[Weatherstack.com](https://weatherstack.com/)**.

// Дополните класс `Weather` следующими методами экземпляра:

// - `getLocation` возвращает название города, за которым следует запятая и пробел и название страны. Например, `Amsterdam, Netherlands`
// - `getIcon` возвращает иконку, который представляет погоду
// - `getTemperature` возвращает температуру, за которой следует символ градуса (используйте HTML Entity) и символ `C`. Например, `10°C`.

// Работа ведется в `weather.js`


// ### **HTML Entities**

// Для представления некоторых символов (например, символа авторского права, валюты евро и т.д.) на странице можно использовать объекты HTML.

// [HTML Entity](https://www.w3.org/wiki/Common_HTML_entities_used_for_typography) - это конструкция, которая отображает подобные символы:

// &copy; // ©
// &eur; // €