const btnEle = document.getElementById('checkBtn');
const inputEle = document.getElementById('numberInput');
const resultEle = document.getElementById('result');



btnEle.addEventListener("click",() =>{
 
    resultEle.textContent = "";
   const rawValue = inputEle.value.trim(); 
  const value = Number(rawValue);

   if(rawValue === "" || isNaN(value)){

resultEle.textContent = " ⚠️ please Enter a valid Number";
return
   }
   if(value > 0){
resultEle.textContent = `${value} is Postive ✅`;
resultEle.style.color = "green";
   }else if(value < 0){
resultEle.textContent = `${value} is Negative ❌`;
resultEle.style.color = "red";
   }else{
    resultEle.textContent = `The Number is Zero 🔵`;
resultEle.style.color = "blue";
   }
   clearAfterDelay(); 
  
})
function clearAfterDelay() {
  setTimeout(() => {
    resultEle.textContent = "";
    inputEle.value = " ";
  }, 1000);
}