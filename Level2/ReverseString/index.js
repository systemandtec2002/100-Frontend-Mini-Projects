
const userInput = document.getElementById('textInput');

const reverseBtn = document.getElementById('reverseBtn');
const resultBox = document.getElementById('resultBox');


function reverseString(str){
 return str.split('').reverse().join('');
}


reverseBtn.addEventListener("click",handleReverse)

function handleReverse(){
const text = userInput.value.trim();
if(!text){
  resultBox.textContent = "⚠️ Please enter some text.";
  resultBox.style.color = "#e63946"; // red for warning
    return;
}

const reversed = reverseString(text);
resultBox.textContent = reversed;
 resultBox.style.color = "#1d3557"


}




btn.addEventListener('click', handleReverse);