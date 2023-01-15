/* index.js */

const getNavbarElement = () => {
	// TODO: get the element with id navbar
   let element = document.querySelector("#navbar")
   console.log(element)
   return element
}

const getMainElement = () => {
	// TODO: get the element with id main
   let element = document.querySelector("#main")
   console.log(element)
   return element
}

const getAboutFromFooter = () => {
  // TODO: get the the about link that's in the footer
  let element = document.querySelector("#footer-wrapper .about");
  console.log(element)
  return element
}

const getTheParagraphElement = () => {
  // TODO: get the paragraph in #main
  let element = document.querySelector("#main p");
  console.log(element)
  return element
}


// Sample usage - do not modify
getNavbarElement();
getMainElement();
getAboutFromFooter();
getTheParagraphElement();

// Завершите функции, чтобы они возвращали то, что ожидается. У каждого метода есть комментарий, который объясняет, что он должен вернуть.
