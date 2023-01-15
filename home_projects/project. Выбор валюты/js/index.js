// /* index.js */

import { getSelectedCurrencies } from "./helpers.js";

document.querySelectorAll(".cards .card")
  .forEach(card => {
    card.addEventListener("click", event => {
      event.currentTarget.classList.toggle("active");
      console.log(getSelectedCurrencies());
    });
  })

  // В данном проекте пользователь может выбрать более одной валюты. Завершите функцию, чтобы она возвращала массив выбранных валют.

  // Позанимайтесь отладкой кода, посмотрите как реализован выбор нескольких валют. Подробнее о методе `toggle()` [здесь](https://doka.guide/js/element-classlist/).

