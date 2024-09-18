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
  if (humanChoice === computerChoice) {
    alert(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper')
  ) {
    humanScore++;
    roundCount++;
    alert(
      `You win! ${humanChoice} beats ${computerChoice}. Score is ${humanScore} : ${computerScore}`
    );
  } else if (
    (humanChoice === 'rock' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'rock')
  ) {
    computerScore++;
    roundCount++;
    alert(
      `You lose! ${computerChoice} beats ${humanChoice}. Score is ${humanScore} : ${computerScore}`
    );
  }
  if (roundCount === 5) {
    if (humanScore > computerScore) {
      alert(`You won the game! Score is ${humanScore} : ${computerScore}`);
    } else if (humanScore < computerScore) {
      alert(`You lost the game! Score is ${humanScore} : ${computerScore}`);
    } else {
      alert(`The game is a tie! Score is ${humanScore} : ${computerScore}`);
    }
    humanScore = 0;
    computerScore = 0;
    roundCount = 0;
  }
  if (roundCount < 5) {
    playRound(humanChoice, computerChoice);
  }
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
