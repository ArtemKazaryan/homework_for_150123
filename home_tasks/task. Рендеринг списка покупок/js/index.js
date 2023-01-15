/**
 * @param {string[]} items
 */
const renderShoppingList = (items) => {
	// my code
  const shoppingList = document.querySelector("#shopping-list");
  sampleList.forEach(listElement => {
    shoppingList.insertAdjacentHTML("beforeend", `<li>${listElement}</li>`);
  });
};

// Sample usage - do not modify
const sampleList = ["Orange", "Banana", "Coffee", "Paper"];
renderShoppingList(sampleList);



// Завершите функцию, чтобы она отображала элементы <li> для каждого элемента в массиве, который она получает. 

