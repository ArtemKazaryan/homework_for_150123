/* index.js */

const getUserName = () => {
	// my code 
  return document.querySelector("#user-name").value
};

// Sample usage - do not modify
document.querySelector("#name-form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(getUserName());
});

// Завершите функцию, чтобы она возвращала имя пользователя из текстового поля. Напишите имя в текстовом поле и нажмите кнопку Continue. Вы должны увидеть имя в консоли.