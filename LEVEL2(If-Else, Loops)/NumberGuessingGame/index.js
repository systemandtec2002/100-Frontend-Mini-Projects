const  userInput = document.querySelector('.user-input');
const form = document.querySelector('form');

let randomNumber = Math.round(Math.random() * 101);

form.addEventListener('submit',(e) =>{
  e.preventDefault();
  const userInputValue = parseInt(userInput.value);
  if(  userInputValue  === randomNumber ){
console.log('congrats');
  }else if(userInputValue > randomNumber){
    console.log('Too High');
  }else{
    console.log('Too Low');
  }
  userInput.value = '';
})