// /* index.js */

  const getShortTextParagraphs = () => {
	// my code
  const paragraphs = [...document.querySelectorAll("p")].filter((par) => par.textContent.length < 10);

  console.log(paragraphs);

  const textParagraphs = [];

  for (let i = 0; i < paragraphs.length; i++) {
    textParagraphs[i] = paragraphs[i].textContent;
  }
  return textParagraphs;
}

// Sample usage - do not modify
console.log(getShortTextParagraphs());


// Завершите функцию, чтобы она возвращала массив всех абзацев, содержащих текст длиной менее 10 символов.
