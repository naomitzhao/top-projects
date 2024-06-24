let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        rockPaperScissors(button.id, getComputerChoice());
    });
});


function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    if (roll == 0){
        return "rock";
    }
    else if (roll == 1) {
        return "paper";
    }
    else if (roll == 2) {
        return "scissors";
    }
}

const textDiv = document.querySelector("#textDiv");

function appendScores(){
    let newText = document.createElement("p");
    newText = document.createElement("p");
    newText.textContent = "you: " + playerScore;
    textDiv.appendChild(newText);
    newText = document.createElement("p");
    newText.textContent = "computer: " + computerScore;
    textDiv.appendChild(newText);
}

function clearChildren() {
    for (i = 0; i < 3; i++) {
        textDiv.removeChild(textDiv.firstElementChild);
    }
}

function clearAndAnnounce(announcement) {
    clearChildren();
    const newText = document.createElement("p");
    newText.textContent = announcement;
    textDiv.appendChild(newText);
    appendScores();
}

function endGame(playerWin){
    if (playerWin) {
        clearAndAnnounce("congrats, you win! refresh to play again.");
    }
    else {
        clearAndAnnounce("you lost (L (skill issue))... refresh to play again.");
    }
    buttons.forEach((button) => {
        button.remove();
    });
}

function rockPaperScissors(playerSelection, computerSelection) {
    let choice = playerSelection;
    if (choice == computerSelection) {
        clearAndAnnounce("tie! you both chose " + computerSelection);
    }
    else if (choice == "rock") {
        if (computerSelection == "paper") {
            computerScore += 1;
            clearAndAnnounce("paper beats rock, you lose");
        }
        else {
            playerScore += 1;
            clearAndAnnounce("rock beats scissors, you win");
        }
    }
    else if (choice == "paper") {
        if (computerSelection == "rock") {
            playerScore += 1;
            clearAndAnnounce("paper beats rock, you win");
        }
        else {
            computerScore += 1;
            clearAndAnnounce("scissors beats paper, you lose");
        }
    }
    else if (choice == "scissors") {
        if (computerSelection == "rock") {
            computerScore += 1;
            clearAndAnnounce("rock beats scissors, you lose");
        }
        else {
            playerScore += 1;
            clearAndAnnounce("scissors beats paper, you win");
        }
    }
    if (playerScore == 5) {
        endGame(true);
    }
    if (computerScore == 5) {
        endGame(false);
    }
}

function game() {
    console.log("welcome to rock paper scissors!");
    let playAgain = true;
    while (playAgain){
        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();
        playAgain = rockPaperScissors(userChoice, computerChoice);
    }
}