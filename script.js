function getHumanChoice() {
  humanSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

  if (
    humanSelection === 'rock' ||
    humanSelection === 'paper' ||
    humanSelection === 'scissors'
  ) {
    return humanSelection;
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
  if (roundCount === 5) {
    alert('Game Over! Score is ${humanScore} - ${computerScore}');
  } else if (humanChoice === computerChoice) {
    alert("It's a tie! Score is ${humanScore} - ${computerScore}");
  } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
    alert('You win! Score is ${humanScore} - ${computerScore}');
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    alert('You win! Score is ${humanScore} - ${computerScore}');
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    alert('You win! Score is ${humanScore} - ${computerScore}');
  } else {
    alert('You lose! Score is ${humanScore} - ${computerScore}');
  }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
