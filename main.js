const fireButton = document.querySelector(".js-fire-button");
const waterButton = document.querySelector(".js-water-button");

const electricButton = document.querySelector(".js-electric-button");
const windButton = document.querySelector(".js-wind-button");

const grassButton = document.querySelector(".js-grass-button");
const resetButton = document.querySelector(".js-reset-button");

const result = document.querySelector(".result");

let score = {
  playerScore: 0,
  opponentScore: 0,
  drawScore: 0,
  gameCount: 0,
};

const savedScore = JSON.parse(localStorage.getItem("score"));

if (savedScore) {
  score = savedScore;
}

const choices = ["Fire", "Water", "Electric", "Wind", "Grass"];

function pickComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 5);
  return choices[randomIndex];
}

function playGame(playerChoice) {
  const computerChoice = pickComputerChoice();
  console.log("Player choice:", playerChoice);
  console.log("Computer choice:", computerChoice);
  let result = "";
  if (playerChoice === computerChoice) {
    result = "Draw";
  }
  else if (playerChoice === "Fire") {
    if (computerChoice === "Grass" ||
      computerChoice === "Wind") {
      result = "You Win";
    } else {
      result = "Opponent Wins";
    }
  }
  else if (playerChoice === "Water") {
    if (computerChoice === "Fire" ||
      computerChoice === "Electric") {
      result = "You Win";
    } else {
      result = "Opponent Wins";
    }
  }
  else if (playerChoice === "Grass") {
    if (computerChoice === "Water" ||
      computerChoice === "Electric") {
      result = "You Win";
    } else {
      result = "Opponent Wins";
    }
  }
  else if (playerChoice === "Electric") {
    if (computerChoice === "Fire" ||
      computerChoice === "Wind") {
      result = "You Win";
    } else {
      result = "Opponent Wins";
    }
  }
  else if (playerChoice === "Wind") {
    if (computerChoice === "Water" ||
      computerChoice === "Grass") {
      result = "You Win";
    } else {
      result = "Opponent Wins";
    }
  }

  console.log(result);
  resultElement.innerText = result;

  if (result === "You Win") {
    score.playerScore++;
  } else if (result === "Opponent Wins") {
    score.opponentScore++;
  } else {
    score.drawScore++
  }

  yourMoveElement.innerHTML = `
    <img src="images/${playerChoice.toLowerCase()}.png" >
    <p>${playerChoice}</p>`;

  opponentMoveElement.innerHTML = `
    <img src="images/${computerChoice.toLowerCase()}.png">
    <p>${computerChoice}</p>
    `;

  finalResultElement.innerText = result;


  score.gameCount++

  updateScores();

  localStorage.setItem("score", JSON.stringify(score));
}

const yourScoreElement =
  document.querySelector(".js-your-score");

const opponentScoreElement =
  document.querySelector(".js-opponent-score")

const drawElement =
  document.querySelector(".js-draw");

const gameCountElement =
  document.querySelector(".js-game-count");

const resultElement =
  document.querySelector(".js-result");

fireButton.addEventListener("click", () => {
  playGame("Fire");
});

waterButton.addEventListener("click", () => {
  playGame("Water");
});

electricButton.addEventListener("click", () => {
  playGame("Electric");
});

windButton.addEventListener("click", () => {
  playGame("Wind");
});

grassButton.addEventListener("click", () => {
  playGame("Grass");
});

resetButton.addEventListener("click", () => {
  score.playerScore = 0;
  score.opponentScore = 0;
  score.drawScore = 0;
  score.gameCount = 0;

  yourMoveElement.innerHTML = "";
  opponentMoveElement.innerHTML = "";
  finalResultElement.innerText = "";

  updateScores();

  localStorage.setItem("score", JSON.stringify(score));

  resultElement.innerText = "Click any Button";
});



function updateScores() {
  yourScoreElement.innerText = `Your Score : ${score.playerScore}`;
  opponentScoreElement.innerText = `Opponent Score : ${score.opponentScore}`;

  drawElement.innerText = `Draw : ${score.drawScore}`;
  gameCountElement.innerText = `Game Count : ${score.gameCount}`;
}

updateScores();

const yourMoveElement = document.querySelector(".js-your-move");
const opponentMoveElement = document.querySelector(".js-opponent-move");
const winningMoveElement = document.querySelector(".js-winning-move");

const finalResultElement = document.querySelector(".js-final-result");