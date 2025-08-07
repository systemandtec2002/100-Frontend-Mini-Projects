const wordTextArea = document.querySelector('#words');

const buttonEle = document.querySelector('#count-btn');

const displayContainer = document.querySelector('#displayCount');

 buttonEle.addEventListener("click",() =>{
let words = wordTextArea.value;


let wordsTrimmed = words.replace(/\s+/g," ").trim();
let splitWords = wordsTrimmed.split(" ");

let numberOfWords = splitWords.length;

if(splitWords[0] === ''){
 numberOfWords = 0; 
}


displayContainer.innerHTML = numberOfWords;

 })

