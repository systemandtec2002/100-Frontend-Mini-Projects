const value = document.querySelector('#input');
const bar = document.querySelector('.strength');
const show = document.querySelector('.show');


value.addEventListener("input",() =>{
  const userInput = value.value;

  let strength = 0;
if(userInput.length >= 8) strength += 1;
  if(/[0-9]/.test(userInput))  strength += 1;
  if(/[A-Z]/.test(userInput))   strength += 1;
  if(/[^A-Za-z0-9]/.test(userInput)) strength += 1;

  switch(strength){
    case 0:
    case 1:{
     (bar.style.width = '25%');
     bar.style.backgroundColor = 'red';
     show.textContent = 'Weak';
     break;
    }

    case 2:{
      (bar.style.width = '50%');
     bar.style.backgroundColor = 'yellow';
     show.textContent = 'Medium';
     break;
    }

    case 3:{
      (bar.style.width = '75%');
     bar.style.backgroundColor = 'orange';
     show.textContent = 'Strong';
     break;
    }

    case 4:{
      (bar.style.width = '100%');
     bar.style.backgroundColor = 'green';
     show.textContent = 'very Strong';
     break;
    }
  }
  
})