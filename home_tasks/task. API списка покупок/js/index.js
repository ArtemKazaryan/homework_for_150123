
// Напишите внутри функции init необходимый код для получения элементов списка покупок из следующего API. Как только вы получите эти элементы, вам нужно будет вставить их один за другим в элемент с идентификатором shopping-list.



const init = () => {
	//my code
  fetch(`https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app/shoppinglist/items.json`)
    .then(response => response.json())
    .then(data => {
      console.log(data); // получили массив объектов API
      const items = [];
      for (let i = 0; i < data.length; i++) {
        items[i] = data[i].item;  // получаем элементы списка покупок от объектов массива API
      };
      console.log(items); // получили массив покупок от объектов массива API
      const shoppingList = document.querySelector("#shopping-list");   // запросили доступ к элементу DOM через константу
      items.forEach(listElement => {
        shoppingList.insertAdjacentHTML("beforeend", `<li>${listElement}</li>`);  // один за другим вставили элементы списка покупок (c HTML-элементами) в элемент с идентификатором shopping-list.
      });
    });
}

// Sample usage - do not modify
init();

