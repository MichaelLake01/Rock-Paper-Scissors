
const rulesArray = ["rock", "scissors", "paper"];
let score = [0,0]

function game()
{
    const rounds = prompt("How many rounds would you like to play? ");
    for (let i = 1; i <= rounds; i++) 
    {   
        i -= playRound(getPlayerSelection(), getComputerChoice(), rounds - i)
    }
}


function playRound(playerSelection, computerSelection, roundsLeft)
{
    let plyInput = rulesArray.indexOf(playerSelection.toLowerCase());
    
  
    if((computerSelection === 0 && plyInput === 1) || 
    (computerSelection === 1 && plyInput === 2) ||
    (computerSelection === 2 && plyInput === 0))
    {
        score[0]++;
        print("computer", rulesArray[computerSelection], rulesArray[plyInput], roundsLeft)
    }
    else if(computerSelection === plyInput)
    {
        console.clear();
        console.log("Tie! Try again.");
        return 1;
    }
    else
    {
        score[1]++;
        print("player", rulesArray[plyInput], rulesArray[computerSelection], roundsLeft)

    }   
        
    return 0;

}

function getComputerChoice()
{
    return Math.floor(Math.random() * 2);
   
}

function getPlayerSelection()
{
    let badInput = true;
    do {
        let input = prompt("Rock Paper Scissors? ");
        if(rulesArray.includes(input.toLowerCase()))
        {
            badInput = false
            return input.toLowerCase(); 
        }
    } while (badInput);
       
}

function print(result, hand, oHand, roundLeft)
{   
    console.clear();

    console.log(`Computer played ${oHand}! Player played ${hand}!`);
    console.log(`${result} won this round with ${hand}!`);
    console.log(`Current score: Player ${score[1]} Computer ${score[0]}`);
    console.log(`Rounds left: ${roundLeft}`);

    if(roundLeft === 0)
    {
        console.log(`*******************************************************************`);
        console.log(`The winner is ${result}! With a score of ${score[0] > score[1] ? score[0] : score[1]}!`);
    }
}

game();