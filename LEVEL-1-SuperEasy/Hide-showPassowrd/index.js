let eyeIcon = document.getElementById('eye-icon');
let password = document.getElementById('password');

eyeIcon.addEventListener("click",() =>{
  if(password.type === "password"){
password.type = 'text'
eyeIcon.src = "./images/eye.png"
  }else{
    password.type = 'password'
    eyeIcon.src = "./images/hide.png"
  }
})