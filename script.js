
function game()
{
    const rounds = prompt("How many rounds would you like to play? ");
    playRound(getPlayerSelection(), getComputerChoice(), rounds)
}


function playRound(playerSelection, computerSelection, rounds)
{
  
}


function getComputerChoice()
{
    return Math.random() * 3;
}

function getPlayerSelection()
{
    return prompt("Rock Paper Scissors? ");
}


game();