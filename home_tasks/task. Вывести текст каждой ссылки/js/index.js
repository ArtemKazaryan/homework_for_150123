

const logLinksTexts = () => {
	// my code
  const links = document.querySelectorAll("a");
  links.forEach(link =>{
    return console.log(link.textContent)
  })

}


// Sample usage - do not modify
logLinksTexts();


// Завершите функцию, чтобы она записывала текст каждой ссылки в консоль.