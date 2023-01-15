const initGetWeather = () => {
	// my code
  const button = document.querySelector("#my-button");
  button.addEventListener("click", () => {
    button.textContent = "Loading...."
  })

}

// Sample usage - do not modify
initGetWeather();

// Завершите функцию, чтобы она инициализировала прослушиватель событий на кнопке Get weather. Когда пользователь нажимает на кнопку, текст должен измениться с Get weather на Loading....
