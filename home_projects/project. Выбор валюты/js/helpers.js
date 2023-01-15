
/* helpers.js */

export const getSelectedCurrencies = () => {
	//my code
    const currencies = [...document.querySelectorAll(".cards .card.active")];

    const selectedCurrencies = [];
    
    for (let i = 0; i < currencies.length; i++) {
        selectedCurrencies[i] = currencies[i].textContent;
    }
    return selectedCurrencies;
}

// В данном проекте пользователь может выбрать более одной валюты. Завершите функцию, чтобы она возвращала массив выбранных валют.

// Позанимайтесь отладкой кода, посмотрите как реализован выбор нескольких валют. Подробнее о методе `toggle()` [здесь](https://doka.guide/js/element-classlist/).
