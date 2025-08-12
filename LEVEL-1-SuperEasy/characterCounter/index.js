let textArea = document.getElementById('textarea');

let counter = document.getElementById('counter');


textArea.addEventListener('input',() =>{

  let cleanedText = textArea.value.replace(/\s+/g, '');
  

let count =  cleanedText.length
counter.innerHTML = count;


})

