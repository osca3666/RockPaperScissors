document.body.style.backgroundColor = "rgb(136, 176, 75)";

let all_container = document.createElement('div');
all_container.classList.add('contain');
all_container.style.display = 'flex';
all_container.style.flexDirection = 'column';
all_container.style.justifyContent = 'space-evenly';


//scoreboard
let rounds = 0;
let user_win = 0;
let comp_win = 0;

const div_score = document.createElement('div');
div_score.classList.add("scoreboard");
div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
document.body.appendChild(div_score);

//images of rps
const img_r = document.createElement("img");
img_r.src = "./images/rock.jpg";
img_r.onload = function() {
    img_r.style.width = "250px";
    img_r.style.height = "auto";
    img_r.style.margin = '10px';
    img_r.style.border = "1px solid black";
  };
const img_p = document.createElement("img");
img_p.src = "./images/paper.jpg";
img_p.onload = function() {
    img_p.style.width = "250px";
    img_p.style.height = "auto";
    img_p.style.margin = '10px';
    img_p.style.border = "1px solid black";
  };
const img_s = document.createElement("img");
img_s.src = "./images/scissor.jpg";
img_s.onload = function() {
    img_s.style.width = "250px";
    img_s.style.height = "auto";
    img_s.style.margin = '10px';
    img_s.style.border = "1px solid black";
  };

function endGameMessage(message){
    while (document.body.firstChild){
        document.body.removeChild(document.body.firstChild);
    }

    let all_container = document.createElement('div');
    all_container.classList.add('contain');
    all_container.style.display = 'flex';
    all_container.style.flexDirection = 'column';
    all_container.style.justifyContent = 'center';
    all_container.style.alignContent= 'center';
    all_container.style.height ='100%';

    const div = document.createElement('div');
    div.textContent = message;
    div.style.textAlign = 'center';

    const restart_button = document.createElement('button');
    restart_button.textContent = "reStart::";
    restart_button.onclick = function() {
        location.reload();
    }

    all_container.append(div);
    all_container.append(restart_button);
    document.body.append(all_container);

}

//game_end display
function gameEnd () {
    if (user_win == 5){
        endGameMessage("You won. YESSS YOUR SO COOL GYADUMMMM");
    }   
    else if (comp_win == 5){
        endGameMessage("Computer won. SMH GO DO YOUR HOMEWORKKKKKKKKKK");
    }
}



img_r.onclick= function(){
    rounds++;
    div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
    playRound('ROCK',getComputerChoice());
    gameEnd();
}
img_p.onclick= function(){
    rounds++;
    div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
    playRound('PAPER',getComputerChoice());
    gameEnd();
}
img_s.onclick= function(){
    rounds++;
    playRound('SCISSOR',getComputerChoice());
    div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
    gameEnd();
}

//images container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.appendChild(img_r);
container.appendChild(img_p);
container.appendChild(img_s);



const div = document.createElement('div');
div.style.display = 'flex';
div.style.color = 'black';
div.style.fontSize = "30px"
div.style.height = "50px";
div.style.border = "2px solid blue";
div.style.borderRadius = "10%";
div.style.alignItems = "center";
div.style.justifyContent = "center";
div.textContent = 'Enter the Dojo. First to 5 wins!'
document.body.appendChild(div);


// //horizontal line
// const hr = document.createElement("hr");
// hr.style.margin = "20px 0px";
// hr.style.height = "2px";
// hr.style.backgroundColor = "blue";
// document.body.appendChild(hr);


//all elements container
// const elements = document.body.querySelectorAll('*');
// elements.forEach(element => {
//     all_container.appendChild(element);
// });

all_container.append(div_score);
all_container.append(container);
all_container.append(div);

document.body.append(all_container);




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
            comp_win++;
            div.textContent="Computer chose paper. you fool- paper beats rock!";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
            //console.log("Computer chose paper. you lost. paper beats rock");
            // return "lost";
        }
        else if (computerChoice == 3)
        {
            user_win++;
            div.textContent="Boulder is always the right choice! You beat the rusty computer scissor.";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;            
            // console.log("Computer chose scizzor. you won. rock beats scizzors");
            // return "win";
        }
    }
    else if (playerChoice == "PAPER")
    {
        if (computerChoice == 1)
        {
            user_win++;
            div.textContent="Computer chose rock. You won cause you're the best. paper beats rock";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;            
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
            comp_win++
            div.textContent="Computer takes a pair of scissors and your paper got shredded### RIP";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
            // console.log("Computer chose scizzors. you lost.");
            // return "lost";
        }
    }
    else if (playerChoice == "SCISSOR")
    {
        if (computerChoice == 1)
        {
            comp_win++;
            div.textContent="The computer's calcium deposit destroyed your puny scissor";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
            // console.log("computer chose rock. you lsot");
            // return "lost";
        }
        else if(computerChoice == 2)
        {
            user_win++;
            div.textContent="YOUR MIGHTY SCISSOR RIPS APART THE COMPUTER PAPER";
            div_score.textContent=`Rounds: ${rounds} Your Wins: ${user_win} Computer Wins: ${comp_win}`;
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