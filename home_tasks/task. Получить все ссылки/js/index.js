/* index.js */
const getAllLinks = () => {
	// my code
  const selectors = document.querySelectorAll("a") // массив всех <a> селекторов

  console.log(selectors)
  const links = [] // пустой массив ссылок

  for (let i = 0; i < selectors.length; i++) {
    console.log(selectors[i].href.substring(22)) // ссылка i-го селектора после двадцатидвухсимвольного куска http://127.0.0.1:5500/
    links.push(selectors[i].href.substring(22)) // пополнение ссылками массива ссылок
  }

  return console.log(links) // полный массив ссылок

};

// Sample usage - do not modify
getAllLinks();

// Завершите функцию, чтобы она нашла и вернула все ссылки со страницы.
