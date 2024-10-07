// function to get the computer

function getComputerChoice() {
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    let random = parseInt(Math.floor(Math.random() * 3));
    if (random === 0) {
        return r;
    }
    else if (random === 1) {
        return p;
    }
    else {
        return s;
    }
}
// function to get human choice

function getHumanChoice() {
    let r = "rock";
    let p = "paper";
    let s = "scissors";
    let choice = prompt(`Choose: \nRock \nPaper \nScissors`);
    if (choice.toUpperCase() === "ROCK") {
        return r;
    }
    else if (choice.toUpperCase() === "PAPER") {
        return p;
    }
    else if (choice.toUpperCase() === "SCISSORS") {
        return s;
    }
    else {
        alert("Invalid choice");
    }
}

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
        console.log(human_choice);
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


playGame();