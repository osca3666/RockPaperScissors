

//images of rps
const img_r = document.createElement("img");
img_r.src = "images/rock.jpg";
const img_p = document.createElement("img");
img_p.src = "images/paper.jpg";
const img_s = document.createElement("img");
img_s.src = "images/scissor.jpg";

//container for rps images
const button_r = document.createElement("div");
button_r.appendChild(img_r);
const button_p = document.createElement("div");
button_p.appendChild(img_p);
const button_s = document.createElement("div");
button_s.appendChild(img_s);

document.body.appendChild(button_r);
document.body.appendChild(button_p);
document.body.appendChild(button_s);


button_r.textContent="ROCK";
button_p.textContent="PAPER";
button_s.textContent="SCIZZOR";


button_r.onclick= function(){
    playRound('ROCK',getComputerChoice());
}
button_p.onclick= function(){
    playRound('PAPER',getComputerChoice());
}
button_s.onclick= function(){
    playRound('SCIZZOR',getComputerChoice());
}

document.body.appendChild(button_r);
document.body.appendChild(button_p);
document.body.appendChild(button_s);


const div = document.createElement('div');
div.style.color = 'red';
document.body.appendChild(div);

const div_score = document.createElement('div');
document.body.appendChild(div_score);


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
            div.textContent="You tie each other's shoelaces";
            // console.log("Computer chose rock. thats a tie!");
            // return;
        }
        else if(computerChoice == 2)
        {
            div.textContent="Computer chose paper. you fool- paper beats rock!";
            //console.log("Computer chose paper. you lost. paper beats rock");
            // return "lost";
        }
        else if (computerChoice == 3)
        {
            div.textContent="Boulder is always the right choice! You beat the rusty computer scizzor.";
            // console.log("Computer chose scizzor. you won. rock beats scizzors");
            // return "win";
        }
    }
    else if (playerChoice == "PAPER")
    {
        if (computerChoice == 1)
        {
            div.textContent="Computer chose rock. you won cause you're the best. paper beats rock";
            // console.log("Computer chose rock. you won. paper beats rock");
            // return "win";
        }
        else if(computerChoice == 2)
        {
            div.textContent="You and the computer bow deeply at one another out of respect";
            // console.log("Computer chose paper as well.tie.");
            // return;
        }
        else if (computerChoice == 3)
        {
            div.textContent="Computer takes a pair of scizzors and your paper got shredded### RIP";
            // console.log("Computer chose scizzors. you lost.");
            // return "lost";
        }
    }
    else if (playerChoice == "SCIZZOR")
    {
        if (computerChoice == 1)
        {
            div.textContent="The computer's calcium deposit destroyed your puny scizzor";
            // console.log("computer chose rock. you lsot");
            // return "lost";
        }
        else if(computerChoice == 2)
        {
            div.textContent="YOUR MIGHTY SCIZZOR RIPS APART THE COWARDLY COMPUTER PAPER";
            // console.log("Computer chose paper, you WOnn");
            // return "win";
        }
        else if (computerChoice == 3)
        {
            div.textContent="YOU AND THE COMPUTER ARE TIED... FOR LAST PLACE :<";
            // console.log("tie");
            // return;
        }
    }
    else
    {
        div.textContent="What is you doing.";
        // console.log("not the right choice")
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

// game();