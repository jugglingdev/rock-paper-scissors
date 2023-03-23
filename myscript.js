// Function to call playRound() function and play 5 rounds.  Keep score and announce winner at the end.

// Use console.log() to display results of each round and winner at the end

// Use prompt() to get input from the user

const button = document.querySelector('button');

function game() {

    let playerScore = 0;
    let computerScore = 0;

    for (let roundNumber = 1; roundNumber < 6; roundNumber++) {

        console.log("Round: " + roundNumber);

        // Function to getPlayerChoice of rock, paper, or scissors

        function getPlayerChoice() {
            let playerText = prompt(`Type "rock", "paper", or "scissors"`);
            let playerChoice = playerText.toLowerCase();
            return playerChoice;
        }
        
        let playerSelection = getPlayerChoice();
        
        console.log("You chose " + playerSelection);

        // Function to getComputerChoice of rock, paper, or scissors

        function getComputerChoice() {
            let choiceArray = ["rock", "paper", "scissors"];
            let randomChoice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
            return randomChoice;
        }
        
        let computerSelection = getComputerChoice();
        
        console.log("Computer chose " + computerSelection);

        // Function to play a single round and declare winner of round

        function playRound(playerSelection, computerSelection) {

            if (playerSelection == "rock" && computerSelection == "paper") {
                return "Oh, no!  Paper beats rock.";
            } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
                return "Hurray!  Rock beats scissors.";
            } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
                return "Oh, no!  Scissors beats paper.";
            } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
                return "Hurray!  Paper beats rock.";
            } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
                return "Oh, no!  Rock beats scissors.";
            } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
                return "Hurray!  Scissors beats paper.";
            } else if (playerSelection == computerSelection) {
                return "Tie!";
            } else {
                return "Something went wrong...";
            }
        
        }
        
        let roundOutcome = (playRound(playerSelection, computerSelection));
        
        console.log(roundOutcome);

        // Functions to keepScore

        function keepPlayerScore() {
            
            if ((playerSelection == "rock" && computerSelection == "scissors") ||       
                (playerSelection == "paper" && computerSelection == "rock") || 
                (playerSelection == "scissors" && computerSelection == "paper")) {
                playerScore += 1;
                return playerScore;
            }
            return playerScore;
        }
            
        function keepComputerScore() {
            
            if ((playerSelection == "rock" && computerSelection == "paper") || 
                (playerSelection == "paper" && computerSelection == "scissors") || 
                (playerSelection == "scissors" && computerSelection == "rock")) {
                computerScore += 1;
                return computerScore;
            } 
            return computerScore;
        }

        console.log("You score: " + keepPlayerScore());
        console.log("Computer score: " + keepComputerScore());

    };

    let playerTotalScore = keepPlayerScore();
    let computerTotalScore = keepComputerScore();

    console.log("You final score: " + playerTotalScore);
    console.log("Computer final score: " + computerTotalScore);

    // Function to announceWinner

    function announceWinner() {
        if (playerTotalScore > computerTotalScore) {
            return "Congrats!  You won the game!";
        } else if (playerTotalScore < computerTotalScore) {
            return "Bummer!  You lost the game.";
        } else {
            return "Tie game!";
        }
    };

    console.log(announceWinner());
}

button.addEventListener('click', game);