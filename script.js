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
  if (humanChoice === computerChoice) {
    return 'tie';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

let humanScore = 0;
let computerScore = 0;
function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  result = playRound(humanSelection, computerSelection);
  if (result === 'win') {
    humanScore++;
    if (humanScore + computerScore === 5) {
      alert(
        `Game over! Final score is You: ${humanScore} - Computer: ${computerScore}`
      );
      return;
    } else {
      alert(
        `You win! ${humanSelection} beats ${computerSelection}.\nScore is You: ${humanScore} - Computer: ${computerScore}`
      );
      playGame();
    }
  } else if (result === 'lose') {
    computerScore++;
    if (humanScore + computerScore === 5) {
      alert(
        `Game over! Final score is You: ${humanScore} - Computer: ${computerScore}`
      );
      return;
    } else {
      alert(
        `Computer wins! ${computerSelection} beats ${humanSelection}.\nScore is You: ${humanScore} - Computer: ${computerScore}`
      );
      playGame();
    }
  } else {
    alert(
      `It's a tie. You both picked ${humanSelection}.\nScore is You: ${humanScore} - Computer: ${computerScore}`
    );
    playGame();
  }
}
playGame();
