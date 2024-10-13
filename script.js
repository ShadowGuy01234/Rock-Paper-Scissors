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
            // TODO: UPDATE THE ALERT TO CHANGE THE SCORES AND OUTPUT IT ON THE PAGE
            alert("You lost!");
                computer++;
            }
            else if (humanChoice == "paper" && computerChoice == "rock") {
                alert("You Won!");
                human++;
            }
            else if (humanChoice == "rock" && computerChoice == "scissors") {
                alert("You Won!");
                human++;
            }
            else if (humanChoice == "scissors" && computerChoice == "rock") {
                alert("You Lost!");
                computer++;
            }
            else if (humanChoice == "scissors" && computerChoice == "paper") {
                alert("You Won!");
                human++;
            }
            else if (humanChoice == "paper" && computerChoice == "scissors") {
                alert("You lost!");
                computer++;
            }
            else {
                alert("draw");
            }
    }, 50) 

    // TODO: CHANGE WINING PARAMETER TO REACH 5 POINTS FIRST

    // if (human > computer) {
    //     alert("Congratulations You Won!");
    // }
    // else if (computer > human) {
    //     alert("You lost! \nBetter Luck next time");
    // }
    // else {
    //     alert("Its a draw!");
    // } 
    }

document.addEventListener("DOMContentLoaded", getHumanChoice);