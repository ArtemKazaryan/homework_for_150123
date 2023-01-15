
/**
 * @param {HTMLButtonElement} button
 */
const isDisabled = button => {
	// my code
  return button.hasAttribute("disabled")
}

// Sample usage - do not modify
console.log(isDisabled(document.querySelector("#button1"))); // false
console.log(isDisabled(document.querySelector("#button2"))); // true
console.log(isDisabled(document.querySelector("#button3"))); // true

// // Завершите функцию, чтобы она возвращала true, когда кнопка отключена и false противном случае.
