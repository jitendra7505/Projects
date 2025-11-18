const board = document.querySelector(".board");
const menuBar = document.querySelector(".menuBar");
const startBtn = document.querySelector(".strtBtn");
const restartBtn = document.querySelector(".restartBtn");
const startgamePannel = document.querySelector(".startGame");
const gameOverPannel = document.querySelector(".gameOver");
let gameHighScore = document.querySelector("#setHighScore");
let gameScore = document.querySelector("#setScore");
let gameTimer = document.querySelector("#setTimer");
let gameOverScore = document.querySelector("#gameOverScore");
let gameOverHighScore = document.querySelector("#gameOverHighScore");
let gameOverTime = document.querySelector("#gameOverTime");

const blockHeight = 50;
const blockWidth = 50;
let Score = 0;
let HighScore = localStorage.getItem("HighScore") || 0;
let Timer = `00:00`;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);
let targetFood = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};

const blocks = [];
let snake = [{ x: 1, y: 3 }];

let direction = "down";
let intervalId = null;
let timerIntervalId = null;

// for (let i = 0; i < rows * cols; i++) {
//   const block = document.createElement("div");
//   block.classList.add("block");
//   board.appendChild(block);
// }

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);
    // block.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = block;
  }
}

const render = () => {
  let head = null;

  blocks[`${targetFood.x}-${targetFood.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  }

  // handle gameOver Pannel
  if (head.x < 0 || head.x > rows || head.y < 0 || head.y > cols) {
    clearInterval(intervalId);
    clearInterval(timerIntervalId);

    gameOverScore.innerHTML = Score;
    gameOverHighScore.innerHTML = HighScore;
    gameOverTime.innerHTML = Timer;

    menuBar.style.display = "flex";
    startgamePannel.style.display = "none";
    gameOverPannel.style.display = "flex";

    return;
  }

  // **** for food eating
  else if (targetFood.x === head.x && targetFood.y === head.y) {
    blocks[`${targetFood.x}-${targetFood.y}`].classList.remove("food");

    snake.push(head);

    Score += 10;
    gameScore.innerText = Score;

    if (Score > HighScore) {
      HighScore = Score;
      localStorage.setItem("HighScore", HighScore.toString());
    }

    targetFood = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
  }

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.remove("fill");
    blocks[`${segment.x}-${segment.y}`].classList.remove("snakeHead");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((segment) => {
    blocks[`${segment.x}-${segment.y}`].classList.add("fill");
  });

  let currHead = snake[0];
  blocks[`${currHead.x}-${currHead.y}`].classList.remove("fill");

  let headBlock = blocks[`${currHead.x}-${currHead.y}`];
  headBlock.classList.add("snakeHead");

  if (direction === "left") {
    headBlock.style.transform = "rotate(90deg)";
  } else if (direction === "right") {
    headBlock.style.transform = "rotate(-90deg)";
  } else if (direction === "up") {
    headBlock.style.transform = "rotate(180deg)";
  } else if (direction === "down") {
    headBlock.style.transform = "rotate(0deg)";
  }
};

// START THE GAME

let startGame = () => {
  menuBar.style.display = "none";
  startgamePannel.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 400);

  let timerIntervalId = setInterval(() => {
    let [min, sec] = Timer.split(":").map(Number);
    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }
    Timer = `${min.toString().padStart(2, "0")}: 
    ${sec.toString().padStart(2, "0")}`;
    gameTimer.innerHTML = Timer;
  }, 1000);
};

startBtn.addEventListener("click", startGame);

// Restart the game
const RestartGame = () => {
  blocks[`${targetFood.x}-${targetFood.y}`].classList.remove("food");
  Score = 0;
  gameScore.innerText = Score;
  gameHighScore.innerText = HighScore;
  snake.forEach((segment) => {
    let element = blocks[`${segment.x}-${segment.y}`];
    if (element) element.classList.remove("fill");
    element.classList.remove("snakeHead");
    element.style.transform = "";
  });

  menuBar.style.display = "none";
  gameOverPannel.style.display = "none";

  snake = [{ x: 1, y: 3 }];
  direction = "down";
  targetFood = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };

  intervalId = setInterval(() => {
    render();
  }, 400);
};

restartBtn.addEventListener("click", RestartGame);

addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") {
    direction = "up";
  } else if (e.key === "ArrowDown") {
    direction = "down";
  } else if (e.key === "ArrowLeft") {
    direction = "left";
  } else if (e.key === "ArrowRight") {
    direction = "right";
  }
});
