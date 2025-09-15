const input =  document.getElementById("userInput");
const btn =  document.getElementById("reverseBtn");
const result = document.getElementById("result"); 

btn.addEventListener("click",() =>{
  const text = input.value;
if(!text){
result.textContent = "Please type something!";
return;
}


const reversed = text.split("").reverse().join("");
result.textContent = `Reversed: ${reversed}`;
});