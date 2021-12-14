"strict use";

const dizin = ["Taş", "Kağıt", "Makas"];

// const computerPlay = function () {
//   let random = dizin[Math.floor(Math.random() * dizin.length)];
//   return console.log(random);
// }

computerPlay()


const computerPlay = function () {
  let random = dizin[Math.floor(Math.random() * dizin.length)];
  return console.log(random);
}

computerPlay()