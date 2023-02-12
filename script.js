

const buttons = document.querySelectorAll('button');
const scoreBoard = document.querySelector('#score-board');
const rulesArray = ["rock", "scissors", "paper"];
let score = [0,0];
let rounds = 5;
const compMove = document.createElement('div');
const wonRound = document.createElement('div');
const currentScore = document.createElement('div');
const remainingRounds = document.createElement('div');
const winner = document.createElement('h2');

const boardArgs = [compMove, wonRound, currentScore, remainingRounds, winner];

buttons.forEach(btn => btn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (rounds >= 0) {
      const playerSelection = btn.className;
      const computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection, rounds);
      rounds--;
    }
}));


function setup()
{
    boardArgs.forEach(e => {
        scoreBoard.appendChild(e);
        
    });
}

function playRound(plyInput, computerSelection, roundsLeft)
{   

  
    if((computerSelection === "rock" && plyInput === "scissors") || 
    (computerSelection === "scissors" && plyInput === "paper") ||
    (computerSelection === "paper" && plyInput === "rock"))
    {
        console.log(computerSelection + "  " + plyInput + " compwin");
        score[0]++;
        print("Computer", computerSelection, plyInput, roundsLeft)
    }
    else if(computerSelection === plyInput)
    {
        
        console.log(computerSelection + "  " + plyInput + " tie");

        alert("Tied! Try again.");
        
    }
    else
    {
        console.log(computerSelection + "  " + plyInput + " plywin");

        score[1]++;
        print("Player", plyInput, computerSelection, roundsLeft)

    }   
        
}

function getComputerChoice()
{
    return rulesArray[Math.floor(Math.random() * 2)];
   
}


function print(win, hand, oHand, roundLeft)
{   
    compMove.textContent = `Computer played ${oHand}!`;
    wonRound.textContent = `${win} won this round with ${hand}!`;
    currentScore.textContent = `Current score: Player: ${score[1]}, Computer: ${score[0]}`;
    remainingRounds.textContent = `Rounds left: ${roundLeft}`;

    if(roundLeft === 0)
    {
        boardArgs.forEach(e => {
            if(e.tagName === "DIV")
            {
                e.remove();
            }
          
        });
        

        winner.textContent = `The Winner is ${win}! With a Score of ${score[0] > score[1] ? score[0] : score[1]}!`;
    }
}


setup();