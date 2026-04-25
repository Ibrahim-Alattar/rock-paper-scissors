let humanScore = 0;
let computerScore = 0;
let level = 0;
let gameActive = true;

const buttons = document.querySelectorAll("button");
const resetBtn = document.querySelector("#reset");
const resultDiv = document.querySelector("#result"); // UI element

// --------------------
// GAME LOGIC
// --------------------

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  let message = "";

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message = `You win! ${humanChoice} beats ${computerChoice}`;
  }
  else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "scissors" && humanChoice === "paper")
  ) {
    computerScore++;
    message = `Computer wins! ${computerChoice} beats ${humanChoice}`;
  }
  else {
    message = `It's a tie!`;
  }

  showResult(`${message}
Score → You: ${humanScore} | Computer: ${computerScore}`);
}

// --------------------
// UI LAYER
// --------------------

function showResult(text) {
  resultDiv.textContent = text;
}

// --------------------
// CONTROL LAYER
// --------------------

function handleGameClick(e) {
  if (!gameActive) return;

  const humanChoice = e.target.dataset.choice;
  const computerChoice = getComputerChoice();

  playRound(humanChoice, computerChoice);

  level++;

  if (level >= 5) {
    gameActive = false;
    showResult(`Game Over!
Final Score → You: ${humanScore} | Computer: ${computerScore}`);
  }
}

// --------------------
// RESET GAME
// --------------------

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  level = 0;
  gameActive = true;

  showResult("New game started! Make your move.");
}

// --------------------
// EVENT LISTENERS
// --------------------

buttons.forEach(btn => {
  btn.addEventListener("click", handleGameClick);
});

resetBtn.addEventListener("click", resetGame);