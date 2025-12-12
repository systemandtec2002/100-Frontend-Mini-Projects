const img = document.getElementById('img');


img.src="https://t3.ftcdn.net/jpg/05/31/90/50/240_F_531905040_uZUjVnRB9LH2Xk30JTyPzILzRN02jnl3.jpg";

const text = document.querySelector('.text');



function btnOn(){
  
img.src="https://cdn.mos.cms.futurecdn.net/HaPnm6P7TZhPQGGUxtDjAg-600-80.jpg"

text.innerText ='On'

const btnOn = document.getElementById('on');
const btnOf = document.getElementById('off');
btnOn.style.backgroundColor = 'rgb(245,188,0)'
btnOn.style.color = 'white'

btnOf.style.backgroundColor = 'white'

btnOf.style.color = 'black'
}

function btnOf(){
  
img.src="https://t3.ftcdn.net/jpg/05/31/90/50/240_F_531905040_uZUjVnRB9LH2Xk30JTyPzILzRN02jnl3.jpg"

text.innerText ='Of'

const btnOf = document.getElementById('off');
const btnOn = document.getElementById('on');
btnOf.style.backgroundColor = 'rgb(245,188,0)'

btnOf.style.color = 'white'

btnOn.style.backgroundColor = 'white'

btnOn.style.color = 'black'
}

