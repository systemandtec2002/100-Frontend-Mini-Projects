

      let userScore = 0;
      let comScore = 0;
     
      const choices = document.querySelectorAll('.choice');

      const msg = document.querySelector('#msg');
      const userScorePara = document.querySelector('#user-score');
      const compScorePara = document.querySelector('#comp-score');


      const getComputerChoice = () => {
       //rock, apaper, scissors 
       const options = ['rock', 'paper', 'scissor'];
       const randomIdx = Math.floor(Math.random()*3);
       return options[randomIdx];
      }

      const DrawGame = () =>{
        console.log('game was draw');
        msg.innerHTML = "Game was Draw. Play again"
      }


    const showWinner = (userWin, userChoice, compChoice) => {
if(userWin){
  userScore++;
  userScorePara.innerHTML = userScore;
  // console.log('you win');
  msg.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor = "green";
}else{
  comScore++;
compScorePara.innerHTML = comScore;
  // console.log('you lose');
  msg.innerHTML = `You Lose! ${compChoice} beats ${userChoice}`;
   msg.style.backgroundColor = "red";
}
      }

      

      const playGame = (userChoice) =>{
// console.log("user choice = ", userChoice);
// Generate computer choice
const compChoice = getComputerChoice();
// console.log("computer choice = ", userChoice);

if(userChoice === compChoice){
//Draw Game
DrawGame();
}else{
  let userWin = true;
  if(userChoice === 'rock'){
    // scissor, paper
    userWin = compChoice === 'paper' ? false : true;
  }else if(userChoice === 'paper'){
//rock, scissor
userWin = compChoice === 'scissor' ? false : true;
  }else{
    userWin = compChoice === 'rock' ? false : true;
  }
  showWinner(userWin, userChoice, compChoice);
}

      }

      choices.forEach((choice) =>{
  
choice.addEventListener("click",() =>{
const userChoice = choice.getAttribute('id'); // Get the id of the clicked choice (rock, paper, or scissor)


        // console.log(choice); every individual div will print here  when we click on images

  console.log('choice was clicked', userChoice);
  playGame(userChoice);

})
      });

   