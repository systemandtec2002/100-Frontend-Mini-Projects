



;(function a (){
  const userInput = document.getElementById('user-input');

const form = document.querySelector('form');
const result = document.querySelector('.result');
const userGuess = document.querySelector('.your-guesses');
const submitBtn =   document.querySelector('.submit-btn');
const startGameBtn = document.querySelector('.start-game');
const allGuessArray = [];
let randomNumber = Math.round(Math.random()*100 + 1);


form.addEventListener("submit",(e) =>{
e.preventDefault()
  // console.log("submitted");
  const userInputValue = parseInt(userInput.value);
  if(userInputValue < randomNumber ){
result.innerText = 'too low';
  }else if(userInputValue > randomNumber){
result.innerText = 'too high';
  }else{
    result.innerText = 'congrats';
  startGameBtn.disabled = false;
  submitBtn.disabled = true;
  }
  // userInput.value = ""; this is first method to empty the input value or we can do it form.reset()
  allGuessArray.push(userInputValue);
userGuess.innerText = 'Your guesses: ' + allGuessArray.join(', ');
  form.reset();
})

startGameBtn.addEventListener("click",() =>{
  userGuess.innerText = "";
    result.innerText = "";
    startGameBtn.disabled = true;
  submitBtn.disabled =false;
 randomNumber = Math.round(Math.random() * 100 + 1);


})

})

