const  userInput = document.querySelector('.user-input');
const form = document.querySelector('form');

const resultEle = document.querySelector('.result');

let randomNumber = Math.floor(Math.random() * 100) + 1; 
// Always between 1 and 100

const allGuesses = document.querySelector('.allGuesses');
const submitBtn = document.querySelector('.submit-btn');
const startGameBtn = document.querySelector('.start-game');

const allGuessesArray = [];

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  console.log("Secret Number:", randomNumber);
  const userInputValue = parseInt(userInput.value);
  
  if(  userInputValue > randomNumber ){
    resultEle.innerText = 'Too High!'
   
  }else if(userInputValue < randomNumber){
resultEle.innerText = 'Too low!'
  }else{
    resultEle.innerText = 'Congrats! You guessed the right number!';
    startGameBtn.disabled = false;
    submitBtn.disabled = true;
  }

  allGuessesArray.push(userInputValue);
 allGuesses.innerText = ` Your guesses: ${allGuessesArray.join(', ')}`;

  userInput.value = '';
 

})

startGameBtn.addEventListener("click",() =>{
  resultEle.innerText = "";
  allGuesses.innerText = "";
  startGameBtn.disabled = true;
  submitBtn.disabled = false;
  
  randomNumber = Math.floor(Math.random() * 100) + 1;
  allGuessesArray.length = 0;
})