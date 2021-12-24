"strict use";

const dizin = ["Rock", "Paper", "Scissors"];

computerPlay = function () {
  return dizin[Math.floor(Math.random() * dizin.length)];
};

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// yöntem 1
playRound = function () {
  const computerSelection = computerPlay();

  if (playerSelection === "rock" && computerSelection === "Paper") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You lost. Rock is beaten by paper.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "It's a tie!. Rock ties with rock";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You won! Rock beats scissors.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "It's a tie! Paper ties with paper";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You won! Paper beats rock.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You lost! Paper is beaten by scissors.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You won! Scissors beats paper.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "You lost! Scissors is beaten by rock.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    if (playerScore < 5 && computerScore < 5) {
      div1.textContent = "It's a tie! Scissors ties with scissors";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score = ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Game is over. Player won.");
    else if (computerScore >= 5)
      return (div3.textContent = "Game is over. Computer won.");
  }
};

function game() {
  return playRound();
}

////

const btn1 = document.createElement("button");
btn1.classList.add("buton1");
btn1.textContent = "Rock";
const btn2 = document.createElement("button");
btn2.classList.add("buton2");
btn2.textContent = "Paper";
const btn3 = document.createElement("button");
btn3.classList.add("buton3");
btn3.textContent = "Scissors";

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

const butonAll = document.querySelectorAll("button");

butonAll.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (e.target.className === "buton1") {
      playerSelection = "rock";
      return console.log(game());
    } else if (e.target.className === "buton2") {
      playerSelection = "paper";
      return console.log(game());
    } else if (e.target.className === "buton3") {
      playerSelection = "scissors";
      return console.log(game());
    }
  })
);

const div1 = document.createElement("div");
document.body.appendChild(div1);
const div2 = document.createElement("div");
document.body.appendChild(div2);
const div3 = document.createElement("div");
document.body.appendChild(div3);
