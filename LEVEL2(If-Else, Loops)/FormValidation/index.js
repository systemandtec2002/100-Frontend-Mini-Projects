const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');


submitBtn.addEventListener("click",(e) =>{
e.preventDefault(); 

if(validateName() && validateEmail() === true){
alert ('form submmited successfully');
}

})

function validateName(){
 let name = document.getElementById('name').value;
 if(name.length === 0){
nameError.innerHTML = 'Name is required';
nameError.previousElementSibling.classList('x-mark'); 
return false //→ it means Validation failed. Don’t submit the form.
 } 

 if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
nameError.innerHTML = 'write full Name';
nameError.previousElementSibling.classList.add('fa-xmark');
return false;
 }

 nameError.innerHTML = '';
  nameError.previousElementSibling.classList.remove('fa-xmark');
  nameError.previousElementSibling.classList.add('');
  return true;
 //Validation passed. You can proceed.
}



function validateEmail() {
  // let email = document.getElementById('email').value;

  // if (email.length === 0) {
  //   emailError.innerHTML = 'Email is required';
  //   emailError.previousElementSibling.classList.remove('fa-check');
  //   emailError.previousElementSibling.classList.add('fa-xmark');
  //   return false;
  // }

  // if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  //   emailError.innerHTML = 'Write a valid Email';
  //   emailError.previousElementSibling.classList.remove('fa-check');
  //   emailError.previousElementSibling.classList.add('fa-xmark');
  //   return false;
  // }

  // emailError.innerHTML = '';
  // emailError.previousElementSibling.classList.remove('fa-xmark');
  // emailError.previousElementSibling.classList.add('fa-check');
  // return true;


 let email = document.getElementById('email').value;
 if(email.length === 0){
emailError.innerHTML = 'Email is required';
emailError.previousElementSibling.classList('x-mark'); 
return false //→ it means Validation failed. Don’t submit the form.
 } 

 if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
emailError.innerHTML = 'write valid email';
emailError.previousElementSibling.classList.add('fa-xmark');
return false;
 }

 emailError.innerHTML = '';
  emailError.previousElementSibling.classList.remove('fa-xmark');
  emailError.previousElementSibling.classList.add('fa-check');
  return true;
 //Validation passed. You can














}
