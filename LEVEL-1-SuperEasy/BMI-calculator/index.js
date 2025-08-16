const height = document.getElementById('height');

const weight = document.getElementById('weight');

const bmi_value = document.getElementById('bmi-value');
const bmi_status = document.getElementById('bmi-status');

const calculate = document.getElementById('calculate-bmi');


calculate.addEventListener("click",() =>{
  if(height.value  === "" || weight.value === ""){
    alert('Please Enter your height and weight here');
    return;

  }else{
let heightValue = height.value;
let weightValue =weight.value;

height_value_meters = heightValue/100;
let bmi = weightValue / (height_value_meters * height_value_meters);
bmi = bmi.toFixed(2);
bmi_value.textContent = bmi

if(bmi <= 18.4){
bmi_status.textContent = 'Underweight'
}else if(bmi >= 18.5 && bmi <= 24.9){
bmi_status.textContent = 'Normal'
}else if(bmi >= 25 && bmi <= 39.9){
bmi_status.textContent = 'overWeight'
}else if(bmi >= 40){
bmi_status.textContent = 'obase'
}

  }
})

