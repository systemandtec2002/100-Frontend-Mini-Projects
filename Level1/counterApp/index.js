const counterDisplay=   document.querySelector('#counter');

const incrementBtn = document.querySelector('#increment');

const decrementBtn = document.querySelector('#decrement');

const resetBtn = document.querySelector('#reset');


  let counter = 0;
 

incrementBtn.addEventListener("click",() =>{
  counter++
  updateDisplay()
 
})

decrementBtn.addEventListener("click",() =>{
  counter--
  updateDisplay()
 
})

resetBtn.addEventListener("click",() =>{
  counter = 0
  updateDisplay()
 
})

function updateDisplay(){
counterDisplay.textContent = counter;
}