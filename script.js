// function to get the computer

let humanChoice = '';
let computerChoice = '';

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

// document.addEventListener("DOMContentLoaded", getComputerChoice);
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

// document.addEventListener("DOMContentLoaded", getHumanChoice);



    
    
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
    }, 50) 

    // TODO: CHANGE WINING PARAMETER TO REACH 5 POINTS FIRST

    if (human == 5 || computer == 5){
        alert
    }
    }

document.addEventListener("DOMContentLoaded", getHumanChoice);