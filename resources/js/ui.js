const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

// get the result modal elements
const resultModal1 = document.querySelector("#resultModal1");
const modalResult1 = document.querySelector("#modalResult1");
const close1Btn = document.querySelector("#close1Btn");
const playAgainBtn1 = document.querySelector("#playAgainBtn1");

// initialize scores
let playerScore = 0;
let computerScore = 0;

// add event listeners to the choice icon
// close1Btn.addEventListener("click", closeModal);
// playAgainBtn1.addEventListener("click", resetGame);

// start of game logic
const playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";
  console.log("Clicked");

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  // end of game logic

  // start of display result
  playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  //examine the result, reflect color
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  // end of display result

  checkWinner();
};

const checkWinner = () => {
  if (playerScore === 5) {
    showModal("You win the game!");
  } else if (computerScore === 5) {
    showModal("You lose the game!");
  }
};

const showModal = (message) => {
  modalResult1.textContent = message;
  resultModal1.style.display = "block";
};

// skip closeModal
const closeModal = () => {
  resultModal1.style.display = "none";
};

const resetGame = () => {
  playerDisplay.textContent = "";
  computerDisplay.textContent = "";
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
};
