// choices
let Choices = document.querySelectorAll("button");

// Display
let you = document.querySelector("#displayYou");
let winner = document.querySelector("#displayWin");
let com = document.querySelector("#displayCom");
let userChoice
let computerChoice
let result

Choices.forEach(Choices => Choices.addEventListener("click", (e) => {
  userChoice = e.target.id
  you.innerHTML = userChoice
  generateComputerChoice()
  getResult()
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
  }
    com.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Draw!"
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "Win!"
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    result = "Lost!"
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    result = "Win!"
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Lost!"
  }
  if (computerChoice === "scissor" && userChoice === "rock") {
    result = "Win!"
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    result = "Lost!"
  }
  winner.innerHTML = result
}

