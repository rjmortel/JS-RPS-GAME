// choices
let Choices = document.querySelectorAll("button");

// Display
let you = document.querySelector("#displayYou");
let winner = document.querySelector("#displayWin");
let com = document.querySelector("#displayCom");
let userChoice
let computerChoice

Choices.forEach(Choices => Choices.addEventListener("click", (e) => {
  userChoice = e.target.id
  you.innerHTML = userChoice
  generateComputerChoice()
}))

function generateComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1
  console.log(randomNumber)

  if (randomNumber === 1) {
    computerChoice = "rock"
  }
  if (randomNumber === 2) {
    computerChoice = "scissor"
  }
  if (randomNumber === 2) {
    computerChoice = "paper"

    com.innerHTML = computerChoice
  }
}











// let rcp = ["Rock", "Scissor", "Paper"];
// let computer = Math.round(Math.random() * 2);
// console.log(computer);
// console.log(rcp[computer]);

