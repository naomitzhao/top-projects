function getComputerChoice() {
    let roll = Math.floor(Math.random() * 3);
    if (roll == 0){
        return "rock";
    }
    else if (roll == 1) {
        return "paper"
    }
    else if (roll == 2) {
        return "scissors"
    }
}

function rockPaperScissors(playerSelection, computerSelection) {
    let choice = playerSelection;
    if (choice == computerSelection) {
        console.log("tie! you both chose " + computerSelection);
    }
    else if (choice == "rock") {
        if (computerSelection == "paper") {
            console.log("paper beats rock, you lose")
            
        }
        else {
            console.log("rock beats scissors, you win")
        }
    }
    else if (choice == "paper") {
        if (computerSelection == "rock") {
            console.log("paper beats rock, you win")
        }
        else {
            console.log("scissors beats paper, you lose")
        }
    }
    else if (choice == "scissors") {
        if (computerSelection == "rock") {
            console.log("rock beats scissors, you lose")
        }
        else {
            console.log("scissors beats paper, you win")
        }
    }
    else {
        console.log("no input provided, ending game. press play to play again!")
        return false;
    }
    return true;
}

function getUserChoice() {
    let ans = "";
    const valid = ["rock", "paper", "scissors", null];
    while (!valid.includes(ans)) {
        ans = prompt("what is your move? (type 'rock', 'paper', or 'scissors')");
        if (ans != null) ans = ans.toLowerCase();
    }
    return ans;
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