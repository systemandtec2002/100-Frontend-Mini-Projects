let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const msgPara = document.getElementById('#msg');

const genComputerChoice =  () =>{
  // rock, paper, scissor
  const options = ['rock', 'paper', 'scissor'];
  const randomIdx = Math.floor(Math.random() *3);
  return options[randomIdx];

} 
const drawGame = () =>{
  console.log("Game Was Draw");
}

const showWinner = (userWin) =>{
if(userWin){
msgPara.innerText = "Player Won!";
}else{
  msgPara.innerText = "Computer Lost!";
}
}



const playGame = (userChoice) =>{
console.log("user choice", userChoice);
const comChoice = genComputerChoice();
console.log("computer choice", comChoice);

if(userChoice === comChoice){
// draw game
drawGame();
}else{
  let userWin = true;
  if(userChoice === 'rock'){
// scissors, paper
userWin = comChoice === "paper" ? false :  true;
  }else if(userChoice === 'paper'){
    userWin = comChoice === "scissor" ? false :  true;
  }else{
    userWin = comChoice === "rock" ? false :  true;
  }
  showWinner(userWin);
}
}



choices.forEach((choice) =>{
 
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  })
})