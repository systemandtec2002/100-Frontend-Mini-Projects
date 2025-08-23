let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.choice');

const msgPara = document.getElementById('msg');

const userScprePara = document.getElementById('player-score');
const computerScorePara  = document.getElementById('computer-score');

const genComputerChoice =  () =>{
  // rock, paper, scissor
  const options = ['rock', 'paper', 'scissors'];
  const randomIdx = Math.floor(Math.random() *3);
  return options[randomIdx];

} 
const drawGame = () =>{
 
   msgPara.innerText = "It's a Draw. play again.";
    msgPara.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, comChoice) =>{
if(userWin){
  userScore++;
  userScprePara.innerText = userScore;
msgPara.innerText = `Player Win! Your ${userChoice} beats ${comChoice}`;
msgPara.style.backgroundColor = "green";
}else{
  computerScore++;
  computerScorePara.innerText = computerScore;
  msgPara.innerText = `Player Lose! ${comChoice} beats Your ${userChoice}`;
  msgPara.style.backgroundColor = "red";
}
}



const playGame = (userChoice) =>{

const comChoice = genComputerChoice();


if(userChoice === comChoice){
// draw game
drawGame();
}else{
  let userWin = true;
  if(userChoice === 'rock'){
// scissors, paper
userWin = comChoice === "paper" ? false :  true;
  }else if(userChoice === 'paper'){
    userWin = comChoice === "scissors" ? false :  true;
  }else{
    userWin = comChoice === "rock" ? false :  true;
  }
  showWinner(userWin, userChoice, comChoice );
}
}



choices.forEach((choice) =>{
 
  choice.addEventListener("click",() => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  })
})