const display = document.querySelector(".displayCount h2");

const button = document.querySelector(".container button");

button.addEventListener("click",() =>{
  const randomNumber = Math.floor(Math.random() * 100) + 1; 

  display.textContent = randomNumber;
})