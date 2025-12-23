const progress = document.querySelector('.progress');

let startBtn = document.querySelector('.start');

let resetBtn = document.querySelector('.reset');
  let interval;

  let width = 0;

startBtn.addEventListener("click",() =>{
if(interval){
  clearInterval(interval);

}
interval = setInterval(() =>{
  width+= 1
progress.style.width = width + "%" ;

},100)
})


resetBtn.addEventListener("click",() =>{
  clearInterval(interval);

width = 0;

  progress.style.width = 0 + "%";
})