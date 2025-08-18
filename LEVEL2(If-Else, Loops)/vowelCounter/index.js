let input =  document.getElementById('userInput');
let output = document.getElementById('vowelCount'); 

input.addEventListener("input", () => {
 
  const vowels = "aeiou";
  let count = 0;
  const userInputValue = input.value;

  for (let i = 0; i < userInputValue.length; i++) {
    if (vowels.includes(userInputValue[i].toLowerCase())) {
      count++;
    }
  }

  output.textContent = count; 
});

