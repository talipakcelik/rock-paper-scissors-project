"strict use";

const dizin = ["Taş", "Kağıt", "Makas"];

computerPlay = function () {
  return dizin[Math.floor(Math.random() * dizin.length)];
};

let playerSelection = "";
let scores, playerScore, computerScore;
// yöntem 1
playRound = function () {
  const computerSelection = computerPlay();
  scores = [0, 0];
  playerScore = 0;
  computerScore = 0;

  if (playerSelection === "taş" && computerSelection === "Kağıt") {
    computerScore = computerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kaybettin. Kağıt taşı kaplar.");
  } else if (playerSelection === "taş" && computerSelection === "Taş") {
    return (divs.textContent = "Berabere.");
  } else if (playerSelection === "taş" && computerSelection === "Makas") {
    playerScore = playerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kazandın. Taş makası kırar.");
  } else if (playerSelection === "kağıt" && computerSelection === "Kağıt") {
    return (divs.textContent = "Berabere.");
  } else if (playerSelection === "kağıt" && computerSelection === "Taş") {
    playerScore = playerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kazandın. Kağıt taşı kaplar.");
  } else if (playerSelection === "kağıt" && computerSelection === "Makas") {
    computerScore = computerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kaybettin. Makas kağıdı keser.");
  } else if (playerSelection === "makas" && computerSelection === "Kağıt") {
    playerScore = playerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kazandın. Makas kağıdı keser.");
  } else if (playerSelection === "makas" && computerSelection === "Taş") {
    computerScore = computerScore++;
    console.log(playerScore, computerScore);
    return (divs.textContent = "Kaybettin. Taş makası kırar.");
  } else if (playerSelection === "makas" && computerSelection === "Makas") {
    return (divs.textContent = "Berabere.");
  }
};

function game() {
  return playRound();
}

////

const btn1 = document.createElement("button");
btn1.classList.add("buton1");
btn1.textContent = "Taş";
const btn2 = document.createElement("button");
btn2.classList.add("buton2");
btn2.textContent = "Kağıt";
const btn3 = document.createElement("button");
btn3.classList.add("buton3");
btn3.textContent = "Makas";

document.body.appendChild(btn1);
document.body.appendChild(btn2);
document.body.appendChild(btn3);

const butonAll = document.querySelectorAll("button");

butonAll.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (e.target.className === "buton1") {
      playerSelection = "taş";
      console.log("aaa");
      return console.log(game());
    } else if (e.target.className === "buton2") {
      playerSelection = "kağıt";
      return console.log(game());
    } else if (e.target.className === "buton3") {
      playerSelection = "makas";
      return console.log(game());
    }
  })
);

const divs = document.createElement("div");
document.body.appendChild(divs);
const div2 = document.createElement("div");
document.body.appendChild(div2);
div2.textContent = `${playerScore}`;

// console.log(butonAll);

// butonAll.addEventListener("click", function (e) {
//   console.log(e);
// }); hata aldık

/********************************* */
//yöntem 2

// let computerSelection = computerPlay();
// const playerSelection = "taş";

// playRound = function (playerSelection, computerSelection) {
//   if (playerSelection === "taş" && computerSelection === "Kağıt")
//     return "Kaybettin. Kağıt makası kaplar.";
//   else if (playerSelection === "taş" && computerSelection === "Taş")
//     return "Berabere.";
//   else if (playerSelection === "taş" && computerSelection === "Makas")
//     return "Kazandın. Taş makası kırar. "
// }

// function game() {
//   computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection))
//   computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection))
//   computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection))
//   computerSelection = computerPlay();
//   console.log(playRound(playerSelection, computerSelection))
// }

// console.log(game())
