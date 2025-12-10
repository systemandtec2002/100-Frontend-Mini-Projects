
  const text = document.getElementById('text');
  const btn = document.getElementById('toggleBtn');

  btn.addEventListener("click",() =>{
text.classList.toggle('hidden');

if(text.classList.contains('hidden')){
btn.innerText = 'show'
  text.style.color = 'green'
btn.style.backgroundColor = 'green'
}else{
  btn.innerText = 'hide'
  text.style.color = 'red'
  btn.style.backgroundColor = 'red'
}
  })
