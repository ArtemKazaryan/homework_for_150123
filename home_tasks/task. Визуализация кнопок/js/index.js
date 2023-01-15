const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", event => {
    console.log(event.currentTarget);
    console.log(event.currentTarget.textContent);
    console.log(event); 
  });
});

