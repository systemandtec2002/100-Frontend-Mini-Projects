const input = document.getElementById("numberInput");
 const button = document.getElementById("calBtn");
  const result = document.getElementById("resultDisplay");

  button.addEventListener("click",() =>{
const value = Number(input.value.trim());

    if(!isNaN(value)){
 const square = value * value;
 result.textContent = `Result: ${square}`;
  
    }
     else {
        result.textContent = "Please enter a valid number.";
        result.style.color = "#ef4444"; 
      }
     
  })
    


//   What is isNaN(value)?
// isNaN() stands for "is Not a Number"

