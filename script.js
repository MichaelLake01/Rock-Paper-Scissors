
function game()
{
    const rounds = prompt("How many rounds would you like to play? ");
    playRound(getPlayerSelection(), getComputerChoice(), rounds)
}


function playRound(playerSelection, computerSelection, rounds)
{
    let score = 0
    plyInput = playerSelection.toLowerCase();
    

}


function getComputerChoice()
{
    gameArray = ["rock", "paper", "scissors"]
    let compInput = Math.random() * 2;
    return gameArray[compInput];
   
}

function getPlayerSelection()
{
    return prompt("Rock Paper Scissors? ");
}


game();