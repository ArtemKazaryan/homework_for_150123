
// my code

const buttons = document.querySelectorAll(".cards .card");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    console.log(event.currentTarget); // the <button> that was clicked

    console.log(event.currentTarget.textContent); // textcontent of the <button> that was clicked

    const clickedButton = event.currentTarget
    
    clickedButton.classList.toggle("active");
  });
});


// Напишите код, который позволить пользователю выбрать несколько валют. Когда пользователь нажимает на .card, вы присваиваете данному элементу класс active. Если пользователь тыкается в уже активный элемент, то необходимо удалить класс active. Пользователь может выбрать более одной валюты.
