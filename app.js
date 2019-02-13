//Caching the DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector(".score-board");
const result_p =  document.querySelector(".result");
const rock_div =  document.getElementById("r");
const paper_div =  document.getElementById("p");
const scissors_div =  document.getElementById("s");

//To get Computer choice Math.Random is needed
//Math.random is originally a random decimal number between 0 and 1
//Do Math.random() * AnyNumber to randomly select any number between your number and 0
//Math.floor rounds up each decimal to the nearest whole number
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {

  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";

}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore; //Updating score from html variable
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();

  //Useing Backticks to implement $ code
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. Wou win!`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You Lose.... :(`;
}

function draw(userChoice, computerChoice){

  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = "user".fontsize(3).sup();
  const smallCompWord = "comp".fontsize(3).sup();
  result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} draws with ${convertToWord(computerChoice)}${smallCompWord}. Go Again!`;

}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  //If user choice and computer choice is equal to the case letters then play the function
  switch(userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

//Clicking on each symbol to play and send choice to game function
function main() {
    rock_div.addEventListener('click', function(){
      game("r")
    })

    paper_div.addEventListener('click', function(){
      game("p")
    })

    scissors_div.addEventListener('click', function(){
      game("s")
    })
}

main();
