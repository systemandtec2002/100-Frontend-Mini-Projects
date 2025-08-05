
const displayCount = document.getElementById('count');

const incrementBtn = document.getElementById('increment');

const decrementBtn = document.getElementById('decrement');

const resetBtn = document.getElementById('reset');


const result = document.getElementById('result');

let count = 0;

function updateDisplay(){
  displayCount.textContent = count;

  if(count === 10){
result.textContent = "🎉 Count reached 10!";
  }else{
   result.textContent = ""; 
  }
}


incrementBtn.addEventListener("click",() =>{
  count++;
  updateDisplay();
})

decrementBtn.addEventListener("click",() =>{
 if (count > 0 && count !== 0) {
      count--;
      updateDisplay();
    }
})

resetBtn.addEventListener("click",() =>{
  count = 0;
  updateDisplay();

})