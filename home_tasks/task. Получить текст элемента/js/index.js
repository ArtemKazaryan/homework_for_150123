/* index.js */
/**
 * @param {string} cssSelector
 */
const getTextFromSelector = cssSelector => {
	// my code
  // защита от ввода названия CSS-селектора, начинающегося с цифры, не предусмотрена!!!

  if  (cssSelector.trim() == "") { // защита от ввода пустого названия CSS-селектора
    return console.log("element not found")
  }
  
  const element = document.querySelector(cssSelector)
  
  if (element === null)  { // защита от ввода отсутствующего названия CSS-селектора
    return console.log("element not found")
  }
  
  return console.log(document.querySelector(cssSelector).textContent);
} 

// Sample usage - do not modify
getTextFromSelector("h1"); // "First human lands on Mars!"
getTextFromSelector("h2"); // "element not found"

// Завершите функцию, чтобы она возвращала текст внутри элемента. Функция получает селектор элемента. Код не должен ломаться, если селектор не найден. Для таких случаев, возвращайте строку "element not found".
