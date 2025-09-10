

function checkPalindrome(){
const inputField = document.querySelector("#wordCount");
const resultBox = document.querySelector("#result");

const inputValue = inputField.value;
const inputCleaned = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
const reversed = inputCleaned.split('').reverse().join('');

resultBox.classList.remove("show", "success", "error", "warning");


if(inputCleaned === ""){
resultBox.textContent = "Please Enter a word";
resultBox.classList.add("warning", "show");
}else if(inputCleaned === reversed){
resultBox.textContent = `${inputValue} is a palindrome`;
resultBox.classList.add("success","show");

}else{
  resultBox.textContent = `${inputValue} is not a palindrome`;
  resultBox.classList.add("error","show");

}
inputField.value = "";
setTimeout(() =>{
resultBox.textContent = "";
resultBox.classList.remove("show", "success", "error", "warning");
},2000)

} 