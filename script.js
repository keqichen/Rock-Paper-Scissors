// get computer's choice randomly
function getComputerChoice () {
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors"
    }
}

// single round result
function playRound (playerSelection,computerSelection) {
    if (playerSelection.toLowerCase == computerSelection) {
        return "It's a Tie!"
    }

    if (playerSelection.toLowerCase == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock."
    }

    if (playerSelection.toLowerCase == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors."
    }

    if (playerSelection.toLowerCase == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock."
    }

    if (playerSelection.toLowerCase == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beat Paper."
    }

    if (playerSelection.toLowerCase == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock."
    }

    if (playerSelection.toLowerCase == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors."
    }

    if (playerSelection.toLowerCase == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper."
    }

// play the game for 5 times
function game (){
        for (let i = 0; i < 5; i++) {
            console.log(playRound (playerSelection,computerSelection))
         }
    }
}