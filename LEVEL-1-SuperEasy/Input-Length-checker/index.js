const inputEle = document.getElementById('textInput');

const btnEle = document.getElementById('checkBtn');

const resultEle = document.getElementById('result');

btnEle.addEventListener("click",() =>{
  const text = inputEle.value.trim(); // remove spaces
  const length = text.length;

  if(length === ""){
resultEle.textContent = "⚠️ Please type something!";
 resultEle.style.color = "orange";
  }else if(length < 5){
resultEle.textContent = `❌ Too short! (${length} characters)`;
        resultEle.style.color = "red";
  }else if(length > 20){
 resultEle.textContent = `❌ Too long! (${length} characters)`;
        resultEle.style.color = "red";
  }else {
        resultEle.textContent = `✅ Length is perfect! (${length} characters)`;
        resultEle.style.color = "green";
    }
})