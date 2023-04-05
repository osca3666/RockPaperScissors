

//images of rps
const img_r = document.createElement("img");
img_r.src = "./images/rock.jpg";
img_r.onload = function() {
    img_r.style.height = "200px";
    img_r.style.width = "auto";
  };
const img_p = document.createElement("img");
img_p.src = "./images/paper.jpg";
img_p.onload = function() {
    img_p.style.height = "200px";
    img_p.style.width = "auto";
  };
const img_s = document.createElement("img");
img_s.src = "./images/scissor.jpg";
img_s.onload = function() {
    img_s.style.height = "200px";
    img_s.style.width = "auto";
  };

const all_img = document.querySelectorAll("img");


//container for rps images

img_r.onclick= function(){
    playRound('ROCK',getComputerChoice());
}
img_p.onclick= function(){
    playRound('PAPER',getComputerChoice());
}
img_s.onclick= function(){
    playRound('SCIZZOR',getComputerChoice());
}

const container = document.createElement("div");
container.style.display = "flex";
document.body.appendChild(container);
container.appendChild(img_r);
container.appendChild(img_p);
container.appendChild(img_s);



const div = document.createElement('div');
div.style.color = 'red';
div.style.display = "flex";
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