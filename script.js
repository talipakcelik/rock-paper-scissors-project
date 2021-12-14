"strict use";

const dizin = ["Taş", "Kağıt", "Makas"];

computerPlay = function () {
  return dizin[Math.floor(Math.random() * dizin.length)];
}

//yöntem 1

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

// yöntem 2




playRound = function () {
  const computerSelection = computerPlay();
  const playerSelection = "taş";

  if (playerSelection === "taş" && computerSelection === "Kağıt")
    return "Kaybettin. Kağıt makası kaplar.";

  else if (playerSelection === "taş" && computerSelection === "Taş")
    return "Berabere.";

  else if (playerSelection === "taş" && computerSelection === "Makas")
    return "Kazandın. Taş makası kırar."
}

function game() {
  console.log(playRound())
  console.log(playRound())
  console.log(playRound())
}

game()

