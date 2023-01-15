// /* index.js */

const getDivElements = () => {
  // TODO: return all the div elements
  return console.log(document.querySelectorAll("div"));
};

const getFooterLinks = () => {
  // TODO: return all the links that are in the footer-wrapper
  console.log("--------");

  // получение массива всех "#footer-wrapper a" селекторов
  const selectors = document.querySelectorAll("#footer-wrapper a");

  console.log(selectors);

  // пустой массив ссылок
  const links = [];

  for (let i = 0; i < selectors.length; i++) {
    console.log(selectors[i].href.substring(22)); // ссылка i-го селектора после двадцатидвухсимвольного куска http://127.0.0.1:5500/

    links.push(selectors[i].href.substring(22)); // пополнение ссылками массива ссылок
  }
  
  return console.log(links); // полный массив ссылок

};

const getAboutLinks = () => {
  // TODO: return all the links that point to the About Us page
  console.log("--------");

  // получение массива всех <a> селекторов
  const selectors = document.querySelectorAll("a"); 

  // пустой массив ссылок
  const links = []; 

  for (let i = 0; i < selectors.length; i++) {
    // получение массива ссыллок, которые указывают на страницу About us
    if (selectors[i].textContent === "About us") {
      links.push(selectors[i].href.substring(22));
    } 
  }

  for (let j = 0; j < links.length; j++) {
    // ссылки массива, которые указывают на страницу About us
    console.log(links[j]); 
    }
  
  // полный массив ссылок, которые указывают на страницу About us
  return console.log(links); 

};

// Sample usage - do not modify
getDivElements();
getFooterLinks();
getAboutLinks();