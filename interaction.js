const button_r = document.querySelector('button.rock');
const button_p = document.querySelector('button.paper');
const button_s = document.querySelector('button.scizzor')

button_r.onlick= playRound('ROCK', getComputerChoice());
button_p.onlick= playRound('PAPER', getComputerChoice());
button_s.onlick= playRound('SCIZZOR', getComputerChoice());

const div = document.createElement('div');
div.color = red;
// body.appendChild(div);
// div.borderStyle = 1px solid red;

const button = document.querySelector('button');

function getRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

function getComputerChoice() {
    let diceRollResult = getRandomNumber(1,3);
    return diceRollResult;
}

function playRound(playerChoice, computerChoice)
{
    if (playerChoice == "ROCK")
    {
        if (computerChoice == 1)
        {
            console.log("Computer chose rock. thats a tie!");
            return;
        }
        else if(computerChoice == 2)
        {
            console.log("Computer chose paper. you lost. paper beats rock");
            return "lost";
        }
        else if (computerChoice == 3)
        {
            console.log("Computer chose scizzor. you won. rock beats scizzors");
            return "win";
        }
    }
    else if (playerChoice == "PAPER")
    {
        if (computerChoice == 1)
        {
            console.log("Computer chose rock. you won. paper beats rock");
            return "win";
        }
        else if(computerChoice == 2)
        {
            console.log("Computer chose paper as well.tie.");
            return;
        }
        else if (computerChoice == 3)
        {
            console.log("Computer chose scizzors. you lost.");
            return "lost";
        }
    }
    else if (playerChoice == "SCIZZOR")
    {
        if (computerChoice == 1)
        {
            console.log("computer chose rock. you lsot");
            return "lost";
        }
        else if(computerChoice == 2)
        {
            console.log("Computer chose paper, you WOnn");
            return "win";
        }
        else if (computerChoice == 3)
        {
            console.log("tie");
            return;
        }
    }
    else
    {
        console.log("not the right choice")
    }
}




// function game()
// {
//     let playerWins = 0;
//     let computerWins = 0;

//     for(i = 0; i < 5; i++)
//     {
//         let playerChoice = prompt("rock,paper,or scizzor boiii?");
//         playerChoice = playerChoice.toUpperCase();
//         let computerChoice = getComputerChoice(); //returns 1 2 or 3
//         result = playRound(playerChoice,computerChoice);
//         if (result == "win")
//         {
//             playerWins++;
//         }
//         else if ( result == "lost")
//         {
//             computerWins++;
//         }
//         console.log("player wins: " + playerWins + "computer wins: " + computerWins);
//     }
// }

game();