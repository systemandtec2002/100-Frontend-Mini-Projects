const nextEle = document.querySelector('.next');
const prevEle = document.querySelector('.prev');

const imgContainerEle = document.querySelector('.image-container');

const images = document.querySelectorAll('img');

let currentImg = 1; 


prevEle.addEventListener("click",() =>{
  currentImg--
  updateImg();
})

nextEle.addEventListener("click",() =>{
currentImg++;
updateImg();

})


function updateImg(){
  if(currentImg > images.length){
currentImg = 1;
  }else if(currentImg < 1){
    currentImg = images.length;
  }
imgContainerEle.style.transform = `translateX(-${(currentImg - 1)* 500}px)`;



}