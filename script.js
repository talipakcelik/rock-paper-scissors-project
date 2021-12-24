"strict use";

const dizin = ["Taş", "Kağıt", "Makas"];

computerPlay = function () {
  return dizin[Math.floor(Math.random() * dizin.length)];
};

let playerSelection = "";
let playerScore = 0;
let computerScore = 0;

// yöntem 1
playRound = function () {
  const computerSelection = computerPlay();

  if (playerSelection === "taş" && computerSelection === "Kağıt") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kaybettin. Kağıt taşı kaplar.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "taş" && computerSelection === "Taş") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Berabere.";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "taş" && computerSelection === "Makas") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kazandın. Taş makası kırar.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "kağıt" && computerSelection === "Kağıt") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Berabere.";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "kağıt" && computerSelection === "Taş") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kazandın. Kağıt taşı kaplar.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "kağıt" && computerSelection === "Makas") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kaybettin. Makas kağıdı keser.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "makas" && computerSelection === "Kağıt") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kazandın. Makas kağıdı keser.";
      playerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "makas" && computerSelection === "Taş") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Kaybettin. Taş makası kırar.";
      computerScore++;
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  } else if (playerSelection === "makas" && computerSelection === "Makas") {
    if (playerScore < 5 && computerScore < 5) {
      divs.textContent = "Berabere.";
      return (div2.textContent = `Player Score = ${playerScore} - Computer Score ${computerScore}`);
    } else if (playerScore >= 5)
      return (div3.textContent = "Oyun bitti. Player kazandı.");
    else if (computerScore >= 5)
      return (div3.textContent = "Oyun bitti. Computer kazandı.");
  }
};

console.log(playerScore, computerScore, "dda");
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
const div3 = document.createElement("div");
document.body.appendChild(div3);
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
