function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = 'rock';
  } else if (computerChoice < 0.67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  return computerChoice;
}
function getHumanChoice() {
  const humanChoice = prompt('Rock, Paper or Scissors?');
  if (
    humanChoice.toLowerCase() != 'rock' &&
    humanChoice.toLowerCase() != 'paper' &&
    humanChoice.toLowerCase() != 'scissors'
  ) {
    return getHumanChoice();
  }
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  console.log(
    `You chose ${humanChoice} and the computer chose ${computerChoice}.`
  );
  if (roundCount < 5) {
    playRound();
    switch (humanChoice) {
      case 'rock':
        switch (computerChoice) {
          case 'rock':
            console.log('Draw. Score is ${humanScore}:${computerScore}');
            break;
          case 'paper':
            console.log(
              'You lose, paper beats rock. Score is ${humanScore}:${computerScore}'
            );
            computerScore++;
            roundCount++;
            break;
          case 'scissors':
            console.log(
              'You win, rock beats scissors. Score is ${humanScore}:${computerScore}'
            );
            humanScore++;
            roundCount++;
            break;
        }
      case 'paper':
        switch (computerChoice) {
          case 'rock':
            console.log(
              'You win, paper beats rock. Score is ${humanScore}:${computerScore}'
            );
            humanScore++;
            roundCount++;
            break;
          case 'paper':
            console.log('Draw. Score is ${humanScore}:${computerScore}');
            break;
          case 'scissors':
            console.log(
              'You lose, scissors beats paper. Score is ${humanScore}:${computerScore}'
            );
            computerScore++;
            roundCount++;
            break;
        }
      case 'scissors':
        switch (computerChoice) {
          case 'rock':
            console.log(
              'You lose, rock beats scissors. Score is ${humanScore}:${computerScore}'
            );
            computerScore++;
            roundCount++;
            break;
          case 'paper':
            console.log(
              'You win, scissors beats paper. Score is ${humanScore}:${computerScore}'
            );
            humanScore++;
            roundCount++;
            break;
          case 'scissors':
            console.log('Draw. Score is ${humanScore}:${computerScore}');
            break;
        }
        break;
      default:
        break;
    }
  } else if (roundCount === 5) {
    console.log('Game over. Final score is ${humanScore}:${computerScore}');
  }
}
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
