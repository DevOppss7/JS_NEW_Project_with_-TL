const CHOICES = ["rock", "paper", "scissors"];
const SCORE_LIMIT = 5;

const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

// get the result modal elements
const resultModal = document.querySelector("#resultModal1");
const modalResult = document.querySelector("#modalResult1");
const close1Btn = document.querySelector("#close1Btn");
const playAgainBtn = document.querySelector("#playAgainBtn1");

// get the rules modal elements
const modal = document.getElementById("rulesModal");
const rulesBtn = document.getElementById("rulesBtn");
const closeBtn = document.getElementsByClassName("close")[0];

// initialize scores
const gameState = {
  playerScore: 0,
  computerScore: 0,
};

// add event listeners to the choice icon
close1Btn.addEventListener("click", closeModal);
playAgainBtn.addEventListener("click", resetGame);

// start of game logic
function playGame(playerChoice) {
  const computerChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
  const result = determineResult(playerChoice, computerChoice);
  updateDisplay(playerChoice, computerChoice, result);
  checkWinner();
}

function determineResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "IT'S A TIE!";
  switch (playerChoice) {
    case "rock":
      return computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
    case "paper":
      return computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
    case "scissors":
      return computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
  }
}

// start of display result
function updateDisplay(playerChoice, computerChoice, result) {
  playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
  resultDisplay.textContent = result;
  resultDisplay.classList.remove("greenText", "redText");
  //examine the result, reflect color
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("greenText");
      gameState.playerScore++;
      playerScoreDisplay.textContent = gameState.playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("redText");
      gameState.computerScore++;
      computerScoreDisplay.textContent = gameState.computerScore;
      break;
  }
}

function checkWinner() {
  if (gameState.playerScore === SCORE_LIMIT) {
    showModal("You win the game!");
  } else if (gameState.computerScore === SCORE_LIMIT) {
    showModal("You lose the game!");
  }
}
// Start of result modal
function showModal(message) {
  modalResult.textContent = message;
  resultModal.style.display = "block";
}

function closeModal() {
  resultModal.style.display = "none";
}

function resetGame() {
  playerDisplay.textContent = "";
  computerDisplay.textContent = "";
  gameState.playerScore = 0;
  gameState.computerScore = 0;
  playerScoreDisplay.textContent = gameState.playerScore;
  computerScoreDisplay.textContent = gameState.computerScore;
  closeModal();
}

// Start of rules modal
rulesBtn.addEventListener("click", function () {
  modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
function outsideClick(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// End of rules modal
