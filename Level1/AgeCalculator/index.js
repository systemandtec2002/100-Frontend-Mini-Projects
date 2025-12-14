const btnEle = document.querySelector('#btn');

const birthdayEle =  document.querySelector('#birthday');


const resultEle = document.querySelector('#result');

function calculateAge(){
const birthdayValue = birthdayEle.value;
// console.log(birthDayValue);
if(birthdayValue === ""){
  alert("Please enter your birthday ");
}
else{
  const age = getAge(birthdayValue);
  console.log(age);
  resultEle.innerText = `Your Age is ${age} years`
}
}

function getAge(birthdayValue){
const currentDate = new Date();
const birthDayDate = new Date(birthdayValue)

let age = currentDate.getFullYear() - birthDayDate.getFullYear()
// console.log(age);

const month = currentDate.getMonth() - birthDayDate.getMonth();

if(month < 0 || (month === 0 && currentDate.getDate() < birthDayDate.getDate())){
age--
}
return age;
}

btnEle.addEventListener("click",calculateAge)