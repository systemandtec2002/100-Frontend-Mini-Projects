const display = document.getElementById('display');

function appendToDisplay(input){
display.value += input;

}

function clearDisplay(){
display.value = " ";
}

function calculate(){
// display.value = eval(display.value); we handle eroor here

try{
  display.value = eval(display.value);
}catch{
  display.value = 'error'
}
}