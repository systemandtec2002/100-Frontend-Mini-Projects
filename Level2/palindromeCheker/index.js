const inputEle = document.querySelector('input');

const btn = document.querySelector('button');

const resultBox = document.querySelector('.result');

const output = document.querySelector('.output');


function checkPalindrome(){
let input = inputEle.value;

const cleanInput = input.toLowerCase().replace(/[^ a-z0-9]/g, "");

const reverseString = cleanInput.split('').reverse().join('');
console.log(reverseString);
if(cleanInput === reverseString && cleanInput !== ""){
  resultBox.innerHTML = `${input} is palindrome`;
  resultBox.style.color = 'green'
  output.innerHTML = `${reverseString}`
}else{
  resultBox.innerHTML = `${input} is not  palindrome`;
  resultBox.style.color = 'red'
  output.innerHTML = `${reverseString}`
}

}

