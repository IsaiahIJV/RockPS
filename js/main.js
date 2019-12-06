const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreboard = {
  player: 0,
  computer: 0
};

//Play Game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
}

//Get Computers choice (Computer gets a random # it chooses either rock,paper, or scissors)
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand <= 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

// get game winner 
function getWinner(p, c) {
  if(p===c){
    return 'draw';
  } else if(p==='rock') {
    if(c === 'paper'){
      return 'computer';
    }else {
      return 'player';
    }
  } else if (p=== 'paper'){
    if(c==='scissors'){
      return 'computer';
    } else {
      return 'player';
    }
  } else if(p === 'scissors'){
    if()
  }
}

//Event Listeners
choices.forEach(choice => choice.addEventListener("click", play));