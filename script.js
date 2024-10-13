// function to get the computer

function getComputerChoice() {
    let r = document.querySelector(".rock");
    let p = document.querySelector(".paper");
    let s = document.querySelector(".scissors");
    let choice = document.querySelector(".computerChoice");
    let random = parseInt(Math.floor(Math.random() * 3));
    if (random === 0) {
        choice.textContent = 'ROCK';
        return 'rock';
    }
    else if (random === 1) {
        choice.textContent = 'PAPER';
        return 'paper';
    }
    else {
        choice.textContent = 'SCISSORS';
        return 'scissors';
    }
}

// document.addEventListener("DOMContentLoaded", getComputerChoice);
// function to get human choice

function getHumanChoice() {
    let choiceComputer = document.querySelector(".computerChoice");
    choiceComputer.textContent = '  ‍';
    let choice = document.querySelector(".humanChoice");
    choice.textContent = '';
    let r = document.querySelector(".rock");
    let p = document.querySelector(".paper");
    let s = document.querySelector(".scissors");

    r.addEventListener("click", () => {
        choice.textContent = 'ROCK';
        getComputerChoice();
        return 'rock';
    });

    p.addEventListener("click", () => {
        choice.textContent = 'PAPER';
        getComputerChoice();
        return 'paper';
    });

    s.addEventListener("click", () => {
        choice.textContent = 'SCISSORS';
        getComputerChoice();
        return 'scissors';
    });
}

document.addEventListener("DOMContentLoaded", getHumanChoice);

    
    
// the main function to play the game

function playGame() {
    let human = 0;
    let computer = 0;
    let human_choice = getHumanChoice();
    // let computer_choice = getComputerChoice();
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


// playGame();