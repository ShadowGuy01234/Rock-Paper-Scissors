// function to get the computer

let humanChoice = '';
let computerChoice = '';
let reset;
document.addEventListener("DOMContentLoaded", () => {
    reset = document.querySelector(".reset");
    getHumanChoice();
});


function getComputerChoice() {
    let choice = document.querySelector(".computerChoice");
    let random = parseInt(Math.floor(Math.random() * 3));
    if (random === 0) {
        choice.textContent = 'ROCK';
        computerChoice = 'rock';
    }
    else if (random === 1) {
        choice.textContent = 'PAPER';
        computerChoice = 'paper';
    }
    else {
        choice.textContent = 'SCISSORS';
        computerChoice = 'scissors';
    }
}

// function to get human choice

function getHumanChoice() {
    let choiceComputer = document.querySelector(".computerChoice");
    let choice = document.querySelector(".humanChoice");
    choiceComputer.textContent = '  ‍';
    choice.textContent = '';
    let r = document.querySelector(".rock");
    let p = document.querySelector(".paper");
    let s = document.querySelector(".scissors");

    r.addEventListener("click", () => {
        choice.textContent = 'ROCK';
        humanChoice = 'rock';
        playGame();
    });

    p.addEventListener("click", () => {
        choice.textContent = 'PAPER';
        humanChoice = 'paper';
        playGame();
    });

    s.addEventListener("click", () => {
        choice.textContent = 'SCISSORS';
        humanChoice = 'scissors';
        playGame();
    });
}




    
    
// the main function to play the game

let human = 0;
let computer = 0;

function playGame() {
    getComputerChoice();
    
    setTimeout(() => {
        if (humanChoice == "rock" && computerChoice == "paper") {
            let score = document.querySelector(".computerScore");
            let result = document.querySelector(".result");
            result.textContent = "COMPUTER WON!";
                computer++;
                score.textContent = computer;
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
            let score = document.querySelector(".humanScore");
            let result = document.querySelector(".result");
            result.textContent = "HUMAN WON!";
                human++;
                score.textContent = human;
            }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
            let score = document.querySelector(".humanScore");
            let result = document.querySelector(".result");
            result.textContent = "HUMAN WON!";
                human++;
                score.textContent = human;
            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
            let score = document.querySelector(".computerScore");
            let result = document.querySelector(".result");
            result.textContent = "COMPUTER WON!";
                computer++;
                score.textContent = computer;
            }
            else if (humanChoice == "scissors" && computerChoice == "paper") {
            let score = document.querySelector(".humanScore");
            let result = document.querySelector(".result");
            result.textContent = "HUMAN WON!";
                human++;
                score.textContent = human;
            }
            else if (humanChoice == "paper" && computerChoice == "scissors") {
            let score = document.querySelector(".computerScore");
            let result = document.querySelector(".result");
            result.textContent = "COMPUTER WON!";
                computer++;
                score.textContent = computer;
            }
            else {
            let result = document.querySelector(".result");
            result.textContent = "DRAW!";
            }

            if(human == 5 || computer == 5) {
                endGame();
            }
    }, 50) 
    }

    function endGame() {
        let winner;
        if (human == 5) {
            winner = 'HUMAN';
        }
        else{
            winner = 'COMPUTER';
        }
        reset.style.display = 'block';
        reset.innerText = `${winner} Won! Play Again`;

        reset.addEventListener("click", () => location.reload());
    }