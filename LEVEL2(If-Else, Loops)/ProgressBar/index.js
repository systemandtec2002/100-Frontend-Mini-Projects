const progressBar  =  document.getElementById('progressBar');
const startBtn =  document.getElementById('startBtn');


startBtn.addEventListener("click", () =>{
  let width = 0;

  const interval = setInterval(() =>{
   
if(width >= 100){
   clearInterval(interval);
}else{
  width++;
      progressBar.style.width = width + '%';
      progressBar.textContent = width + '%';
}
  }, 50)
})