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
    console.log(`You both choose ${humanChoice}.It's a tie`);
    return 'tie';
  } else if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')
  ) {
    console.log(`${humanChoice} beats ${computerChoice}. You win`);
    return 'win';
  } else {
    console.log(`${computerChoice} beats ${humanChoice}. You lose`);
    return 'lose';
  }
}

let humanScore = 0;
let computerScore = 0;

const rock = document.createElement('button');
rock.innerHTML = 'Rock';
rock.id = 'rock';
rock.addEventListener('click', (e) => {
  playRound(e.target.id, getComputerChoice());
});

const paper = document.createElement('button');
paper.innerHTML = 'Paper';
paper.id = 'paper';
paper.addEventListener('click', (e) => {
  playRound(e.target.id, getComputerChoice());
});

const scissors = document.createElement('button');
scissors.innerHTML = 'Scissors';
scissors.id = 'scissors';
scissors.addEventListener('click', (e) => {
  playRound(e.target.id, getComputerChoice());
});

const buttons = document.createElement('div');
buttons.setAttribute('id', 'buttons');

buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissors);
document.body.appendChild(buttons);
