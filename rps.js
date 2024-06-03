console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0) {
        return "ROCK"
    }
    else if (choice == 1){
        return "PAPER"
    }
    else if (choice == 2){
        return "SCISSORS"
    }
}
console.log(getComputerChoice());

function getHumanChoice(){
   return prompt("Rock, Paper, Scissors")
}

console.log(getHumanChoice());

let humanScore = 0;

let computerScore = 0;

function playRound(HumanChoice,ComputerChoice){
    HumanChoice = getHumanChoice().toUpperCase;
    ComputerChoice = getComputerChoice;
}