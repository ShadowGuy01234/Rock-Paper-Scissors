// function to get the computer

function getComputerChoice() {
    let r = document.querySelector(".rock");
    let p = document.querySelector(".paper");
    let s = document.querySelector(".scissors");
    let choice = document.querySelector(".computerChoice");
    let random = parseInt(Math.floor(Math.random() * 3));
    if (random === 0) {
        choice.textContent = 'ROCK';
    }
    else if (random === 1) {
        choice.textContent = 'PAPER';
    }
    else {
        choice.textContent = 'SCISSORS';
    }
}

document.addEventListener("DOMContentLoaded", getComputerChoice);
// function to get human choice

function getHumanChoice() {
    let humanChoice = '';
    let choice = document.querySelector(".humanChoice");
    let r = document.querySelector(".rock");
    let p = document.querySelector(".paper");
    let s = document.querySelector(".scissors");

    r.addEventListener("click", () => {
        humanChoice = 'rock';
        choice.textContent = 'ROCK';
    });

    p.addEventListener("click", () => {
        humanChoice = 'paper';
        choice.textContent = 'PAPER';
    });

    s.addEventListener("click", () => {
        humanChoice = 'scissors';
        choice.textContent = 'SCISSORS';
    });
}

document.addEventListener("DOMContentLoaded", getHumanChoice);

    
    
// the main function to play the game

function playGame() {
    let human = 0;
    let computer = 0;
    let round = parseInt(prompt("How many rounds you wanna play?"))
    outer: for (let i = 0; i < round; i++) {
        let human_choice = getHumanChoice();
        if (human_choice == undefined) {
            continue outer;
        }
            let computer_choice = getComputerChoice();
            alert(`Computer: ${computer_choice}`)
            if (human_choice == "rock" && computer_choice == "paper") {
            alert("You lost!");
                computer++;
            }
            else if (human_choice == "paper" && computer_choice == "rock") {
                alert("You Won!");
                human++;
            }
            else if (human_choice == "rock" && computer_choice == "scissors") {
                alert("You Won!");
                human++;
            }
            else if (human_choice == "scissors" && computer_choice == "rock") {
                alert("You Lost!");
                computer++;
            }
            else if (human_choice == "scissors" && computer_choice == "paper") {
                alert("You Won!");
                human++;
            }
            else if (human_choice == "paper" && computer_choice == "scissors") {
                alert("You lost!");
                computer++;
            }
            else {
                alert("draw");
            }
            alert(`Scores: \nYou: ${human}\nComputer: ${computer}`);
        }
        if (human > computer) {
            alert("Congratulations You Won!");
        }
        else if (computer > human) {
            alert("You lost! \nBetter Luck next time");
        }
        else {
            alert("Its a draw!");
        } 
}


// playGame();