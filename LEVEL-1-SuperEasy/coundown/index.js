const countdownEle = document.querySelector('#countdown');


let number = 10;

const countdownTimer = setInterval(()=>{
countdownEle.textContent = number;
   number--
  

  if(number < 0){
    
    clearInterval(countdownTimer);
    countdownEle.textContent = "🎉 Countdown Complete!";
    countdownEle.style.fontSize = '2rem'; 
    countdownEle.style.color = 'green'; 
    countdownEle.style.fontweight = '1000';
   
  }
 
  
  
  
},1000)

