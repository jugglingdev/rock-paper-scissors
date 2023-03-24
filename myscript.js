const rock = document.querySelector('button.rock');
const paper = document.querySelector('button.paper');
const scissors = document.querySelector('button.scissors');


// Functions to get playerSelection of rock, paper, or scissors

let playerSelection = "";
let computerSelection = "";

rock.addEventListener('click', function() {
    playerSelection = "rock";
    console.log("You chose " + playerSelection);
    return playerSelection;
});

paper.addEventListener('click', function() {
    playerSelection = "paper";
    console.log("You chose " + playerSelection);
    return playerSelection;
});

scissors.addEventListener('click', function() {
    playerSelection = "scissors";
    console.log("You chose " + playerSelection);
    return playerSelection;
});
    

// Function to play a single round and declare winner of round

function playRound() {

    function getComputerChoice() {
        let choiceArray = ["rock", "paper", "scissors"];
        computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        console.log("Computer chose " + computerSelection);
        return computerSelection;
    };

    getComputerChoice();

    let roundOutcome = "";

    if (playerSelection == "rock" && computerSelection == "paper") {
        roundOutcome = "Oh, no!  Paper beats rock.";
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        roundOutcome = "Hurray!  Rock beats scissors.";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        roundOutcome = "Oh, no!  Scissors beats paper.";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        roundOutcome = "Hurray!  Paper beats rock.";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        roundOutcome = "Oh, no!  Rock beats scissors.";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        roundOutcome = "Hurray!  Scissors beats paper.";
    } else if (playerSelection == computerSelection) {
        roundOutcome = "Tie!";
    } else {
        roundOutcome = "Something went wrong...";
    };

    console.log(roundOutcome);
    return roundOutcome;    
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


// Functions to keepScore and announceWinner

let playerScore = 0;
let computerScore = 0;

function keepScore() {
    
    function keepPlayerScore () {
        if ((playerSelection == "rock" && computerSelection == "scissors") ||       
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore += 1;
            console.log("Your score: " + playerScore);
            return playerScore;
        } else {
        console.log("Your score: " + playerScore);
        return playerScore;
        }
    };

    keepPlayerScore();
    
    function keepComputerScore() {
        if ((playerSelection == "paper" && computerSelection == "scissors") ||       
            (playerSelection == "scissors" && computerSelection == "rock") || 
            (playerSelection == "rock" && computerSelection == "paper")) {
            computerScore += 1;
            console.log("Computer score: " + computerScore);
            return computerScore;
        } else {
        console.log("Computer score: " + computerScore);
        return computerScore;
        }
    };

    keepComputerScore();

    function announceWinner() {
        if (playerScore === 5) {
            announcement = "Congrats!  You won the game!";
        } else if (computerScore === 5) {
            announcement = "Bummer!  You lost the game.";
        } else {
            announcement = "Keep going!";
        }
        
        console.log(announcement);
        return announcement;
    };

    announceWinner();

}

rock.addEventListener('click', keepScore);
paper.addEventListener('click', keepScore);
scissors.addEventListener('click', keepScore);


