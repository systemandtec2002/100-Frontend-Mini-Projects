const btnEle = document.querySelector('#btn');
const paraEle = document.querySelector('#para');

btnEle.addEventListener("click",() =>{

btnEle.classList.toggle('active');
if(btnEle.classList.contains('active')){
btnEle.textContent = 'hide'
 paraEle.style.display = 'block';
}else{
   btnEle.textContent = 'show';
    paraEle.style.display = 'none';
}

})

