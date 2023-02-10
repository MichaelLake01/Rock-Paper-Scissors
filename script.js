

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


buttons.forEach(btn => btn.addEventListener('click', function(e)
{
    e.stopPropagation();
    playRound(btn.className, getComputerChoice(), rounds--)

}));


function setup()
{
    boardArgs.forEach(e => {
        scoreBoard.appendChild(e);
        
    });
}

function playRound(playerSelection, computerSelection, roundsLeft)
{
    console.log("comp" + computerSelection);
    let plyInput = rulesArray.indexOf(playerSelection);
    console.log(playerSelection);
  
    if((computerSelection === 0 && plyInput === 1) || 
    (computerSelection === 1 && plyInput === 2) ||
    (computerSelection === 2 && plyInput === 0))
    {
        score[0]++;
        print("Computer", rulesArray[computerSelection], rulesArray[plyInput], roundsLeft)
    }
    else if(computerSelection === plyInput)
    {
        
        alert("Tied! Try again.");
        
    }
    else
    {
        score[1]++;
        print("Player", rulesArray[plyInput], rulesArray[computerSelection], roundsLeft)

    }   
        
}

function getComputerChoice()
{
    return Math.floor(Math.random() * 2);
   
}


function print(result, hand, oHand, roundLeft)
{   
    compMove.textContent = `Computer played ${oHand}!`;
    wonRound.textContent = `${result} won this round with ${hand}!`;
    currentScore.textContent = `Current score: Player: ${score[1]}, Computer: ${score[0]}`;
    remainingRounds.textContent = `Rounds left: ${roundLeft}`;

    if(roundLeft === 0)
    {
        boardArgs.forEach(e => {
            if(e.tagName === "DIV")
            {
                console.log(e.tagName);
                e.remove();
            }
          
        });
        

        winner.textContent = `The Winner is ${result}! With a Score of ${score[0] > score[1] ? score[0] : score[1]}!`;
    }
}


setup();