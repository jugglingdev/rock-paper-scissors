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

let roundOutcome = "";

let announce = document.querySelector('div.announcement');

let roundAnnounce = document.createElement('p');
roundAnnounce.classList.add('announce');
roundAnnounce.textContent = "Click to begin";
    roundAnnounce.setAttribute('style', 'text-align: center; font-size: 36px');

announce.appendChild(roundAnnounce);


function playRound() {

    function getComputerChoice() {
        let choiceArray = ["rock", "paper", "scissors"];
        computerSelection = choiceArray[Math.floor(Math.random() * choiceArray.length)];
        console.log("Computer chose " + computerSelection);
        return computerSelection;
    };

    getComputerChoice();

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

    roundAnnounce.textContent = roundOutcome;
    return roundOutcome;    
}

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);


// Confetti Canvas

//-----------Var Inits--------------
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
cx = ctx.canvas.width / 2;
cy = ctx.canvas.height / 2;

let confetti = [];
const confettiCount = 250;
const gravity = 0.5;
const terminalVelocity = 5;
const drag = 0.075;
const colors = [
{ front: '#ff52ab', back: '#fdbede' },
{ front: '#fbbc00', back: '#fceab6' },
{ front: '#04cae4', back: '#bbeff6' }
];

//-----------Functions--------------
resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  cx = ctx.canvas.width / 2;
  cy = ctx.canvas.height / 2;
};

randomRange = (min, max) => Math.random() * (max - min) + min;

let initConfetti = () => {
  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      color: colors[Math.floor(randomRange(0, colors.length))],
      dimensions: {
        x: randomRange(10, 20),
        y: randomRange(10, 30) },

      position: {
        x: randomRange(0, canvas.width),
        y: canvas.height - 1 },

      rotation: randomRange(0, 2 * Math.PI),
      scale: {
        x: 1,
        y: 1 },

      velocity: {
        x: randomRange(-25, 25),
        y: randomRange(0, -50) } });
  }
};

//---------Render-----------
render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confetti.forEach((confetto, index) => {
    let width = confetto.dimensions.x * confetto.scale.x;
    let height = confetto.dimensions.y * confetto.scale.y;

    // Move canvas to position and rotate
    ctx.translate(confetto.position.x, confetto.position.y);
    ctx.rotate(confetto.rotation);

    // Apply forces to velocity
    confetto.velocity.x -= confetto.velocity.x * drag;
    confetto.velocity.y = Math.min(confetto.velocity.y + gravity, terminalVelocity);
    confetto.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    // Set position
    confetto.position.x += confetto.velocity.x;
    confetto.position.y += confetto.velocity.y;

    // Delete confetti when out of frame
    if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

    // Loop confetto x position
    if (confetto.position.x > canvas.width) confetto.position.x = 0;
    if (confetto.position.x < 0) confetto.position.x = canvas.width;

    // Spin confetto by scaling y
    confetto.scale.y = Math.cos(confetto.position.y * 0.1);
    ctx.fillStyle = confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

    // Draw confetti
    ctx.fillRect(-width / 2, -height / 2, width, height);

    // Reset transform matrix
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  });

  // Fire off another round of confetti
  //if (confetti.length <= 10) initConfetti();

  window.requestAnimationFrame(render);
};

//---------Execution--------
//initConfetti();
//render();

//----------Resize----------
window.addEventListener('resize', function () {
  resizeCanvas();
});

//------------Click------------
//window.addEventListener('click', function () {
//  initConfetti();
//});


// Functions to keepScore and announceWinner

let playerScore = 0;
let computerScore = 0;

let scores = document.querySelector('div.scores');

let scoreboard = document.createElement('p');
scoreboard.classList.add('score');
scoreboard.textContent = playerScore + ' : ' + computerScore;
    scoreboard.setAttribute('style', 'text-align: center; font-size: 55px')

scores.appendChild(scoreboard);

let gameResult = "";

function keepScore() {
    
    function keepPlayerScore () {
        if ((playerSelection == "rock" && computerSelection == "scissors") ||       
            (playerSelection == "paper" && computerSelection == "rock") || 
            (playerSelection == "scissors" && computerSelection == "paper")) {
            playerScore += 1;
            scoreboard.textContent = playerScore + ' : ' + computerScore;
            return playerScore;
        } else {
        scoreboard.textContent = playerScore + ' : ' + computerScore;
        return playerScore;
        }
    };

    keepPlayerScore();
    
    function keepComputerScore() {
        if ((playerSelection == "paper" && computerSelection == "scissors") ||       
            (playerSelection == "scissors" && computerSelection == "rock") || 
            (playerSelection == "rock" && computerSelection == "paper")) {
            computerScore += 1;
            scoreboard.textContent = playerScore + ' : ' + computerScore;
            return computerScore;
        } else {
        scoreboard.textContent = playerScore + ' : ' + computerScore;
        return computerScore;
        }
    };

    keepComputerScore();

    function announceWinner() {
        if (playerScore === 5) {
            gameResult = "Congrats!  You won the game!";
            initConfetti();
            render();
        } else if (computerScore === 5) {
            gameResult = "Bummer!  You lost the game.";
        } else {
           return;
        }
        
        roundAnnounce.textContent = gameResult;
        return gameResult;
    };

    announceWinner();
    resetGame();
}

rock.addEventListener('click', keepScore);
paper.addEventListener('click', keepScore);
scissors.addEventListener('click', keepScore);

// Fade text transition

function textTransition() {
    announce.classList.remove('fade');
    setTimeout(() => {
        requestAnimationFrame(() => {
            announce.classList.add('fade');
        });
    }, 225);
}

rock.addEventListener('click', textTransition);
paper.addEventListener('click', textTransition);
scissors.addEventListener('click', textTransition);

// Function to resetGame() after winner is declared

function resetGame() {
    if (gameResult == "Congrats!  You won the game!" || gameResult == "Bummer!  You lost the game.") {
        playerScore = 0;
        computerScore = 0;
        gameResult = "";

        setTimeout(() => {
            textTransition();
            roundAnnounce.textContent = "Click to play again";
            console.log("Play again!");
            return roundAnnounce;
        }, 3000);
    }
};
