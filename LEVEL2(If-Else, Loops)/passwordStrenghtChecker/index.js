
const password = document.getElementById("password");
const message  = document.getElementById("message");
const strength  = document.getElementById("strength");



 password.addEventListener("input",() =>{
  if(password.value.length > 0){
message.style.display = "block"
  }else{
    message.style.display = "none"
  }

  if(password.value.length < 4){
strength.innerHTML = "weak";
password.style.borderColor = "#ff5929";
message.style.color = "#ff5929";

  }else if(password.value.length > 4 && password.value.length < 8){
strength.innerHTML = "medium";

password.style.borderColor = "yellow";
message.style.color = "yellow";

  }else if(password.value.length >= 8){
    strength.innerHTML = "strong"
password.style.borderColor = "#26d730";
message.style.color = "#26d730";


  }
 })