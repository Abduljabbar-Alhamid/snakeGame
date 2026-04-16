const gameBord = document.querySelector("#gameBord");
const ctx = gameBord.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBord.width;
const gameHeight = gameBord.height;
const boradBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodX;
let foodY;
let score = 0;
let snake = [
  { x: unitSize * 4, y: 0 },
  { x: unitSize * 3, y: 0 },
  { x: unitSize * 2, y: 0 },
  { x: unitSize, y: 0 },
  { x: 0, y: 0 },
];
window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);
gameStart();
createFood();

const gameStart = () => {};

const nextTick = () => {};
const clearBord = () => {};
const createFood = () => {};
const drawFood = () => {
  randomFood = (min, max) => {
    const randNum = Math.round((Math.round() * (max - min) + min) / unitSize);
    return randNum;
  };
  foodX = randomFood(0, gameWidth - unitSize);
  console.log(foodX);
};
const moveSnake = () => {};
const drawSnake = () => {};
const changeDirection = () => {};
const checkGameOver = () => {};
const displayGame = () => {};
const resetGame = () => {};
