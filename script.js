function getHumanChoice() {
  humansPick = prompt('Rock, Paper or Scissors?').toLowerCase();

  if (
    humansPick === 'rock' ||
    humansPick === 'paper' ||
    humansPick === 'scissors'
  ) {
    return humansPick;
  } else {
    alert('Please enter rock, paper or scissors');
    return getHumanChoice();
  }
}
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function playRound(humanChoice, computerChoice) {
  if (humanScore + computerScore === 5) {
    alert(`Game over! ${humanScore} - ${computerScore}`);
    humanScore = 0;
    computerScore = 0;
    return;
  } else if (humanChoice === computerChoice) {
    alert(`It's a tie! Score is ${humanScore} - ${computerScore}`);
    playRound();
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    alert(
      `You win! ${humanChoice} beats ${computerChoice}! Score is ${humanScore} - ${computerScore}`
    );
    playRound();
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    computerScore++;
    alert(
      `You lose! ${computerChoice} beats ${humanChoice}! Score is ${humanScore} - ${computerScore}`
    );
    playRound();
  }
}
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
