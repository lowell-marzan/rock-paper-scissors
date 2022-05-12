/**
 * computerPlay() randomly returns "Rock", "Paper", or "Scissors" 
 * because the user is playing against the computer
 * @returns String representing rock, paper, or scissors
 */
function computerPlay(){
    let play = Math.floor(Math.random() * 3) + 1;

    switch (play){
        case 1:
            return "ROCK";
            break;

        case 2:
            return "PAPER";
            break;

        case 3:
            return "SCISSORS";
            break;
    }
}

/**
 * playRound will get the player's choice and computer's
 * choice and determine who is the winner.
 * If player's choice is not rock, paper, or scissors,
 * we tell the user because we can't play the game then
 * @param {String} comp 
 * @param {String} player 
 * @returns {String} Result message
 */
function playRound(comp, player = ""){

    player = player.toUpperCase();
    let msg = "";

    if (player != "ROCK" && player != "PAPER" && player != "SCISSORS"){

        msg = "That input was not recognized. Please try again."

    } else if (player == comp){

        msg = "The player chose " + player + " and the computer chose " + comp + ". It was a tie!\n";

    } else if ((player == "ROCK" && comp == "SCISSORS") || (player == "SCISSORS" && comp == "PAPER") || (player == "PAPER" && comp == "ROCK")){

        msg = "The player chose " + player + " and the computer chose " + comp + ". The player won!\n";

    } else {

        msg = "The player chose " + player + " and the computer chose " + comp + ". The computer won!\n";

    }

    return msg;

}

// Ask user for choice and play Rock, Paper, Scissors
for (let i = 0; i < 5; i++){

    let playerChoice = prompt("Please choose rock, paper, or scissors: ");
    console.log(playRound(computerPlay(), playerChoice));

}