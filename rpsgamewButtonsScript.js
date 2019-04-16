function computerPlay() {
    let options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * options.length)];
}

let computerScore = 0;
let playerScore = 0;
let result = '';
let finalResult = '';

function playRound(playerSelection, computerSelection) {     
    if (playerSelection === computerSelection) {
        result = 'It\'s a tie!';
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            playerScore += 1;
            result = 'Rock beats Scissors';
        } else {
            computerScore += 1;
            result = 'Paper beats Rock';
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore += 1;
            result = 'Scissors beats Paper';
        } else {
            playerScore += 1;
            result = 'Paper beats Rock';
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            computerScore += 1;
            result = 'Rock beats Scissors';
        } else {
            playerScore += 1;
            result = 'Scissors beats Paper';
            
        }
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    checkWinner(playerScore, computerScore);
}

function checkWinner(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        document.getElementById('Rock').disabled = true;
        document.getElementById('Paper').disabled = true;
        document.getElementById('Scissors').disabled = true;
    }
    
    if (playerScore == 5) {
        finalResult = 'You win!';  
    } else if (computerScore == 5) {
        finalResult = 'You lose!';    
    }
    document.getElementById('finalResult').innerHTML = finalResult;
}


let computerSelection;
let playerSelection;

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', (e) => {
    playerSelection = button.id;
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
  });
});

