function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
  let choice = String(prompt('Enter "rock" "paper" or "scissors".', ''))
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`
      humans win! Score is ${humanScore} to ${computerScore}
      ${humanChoice} beats ${computerChoice}!!!
      `);
    } else if (
      (computerChoice === "rock" && humanChoice === "scissors") ||
      (computerChoice === "paper" && humanChoice === "rock") ||
      (computerChoice === "scissors" && humanChoice === "paper")
    ) {
      computerScore++;
      console.log(`
      computers win! Score is ${computerScore} to ${humanScore}
      ${computerChoice} beats ${humanChoice}!!!
      `);
    }
    else {
      console.log(`
      Nobody wins, it's a tie!
      humans score ${humanScore}
      computers score ${computerScore}
      `);
    }
  }
  for (let i = 1; i <= 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(` Round ${i}`);
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(`humans beat robots`);
  } else if (computerScore > humanScore) {
    console.log(`robots beat humans`);
  } else {
    console.log(`nobody beat anybody, it's a tie`);
  }

}

playGame();