const board = document.querySelector("#board");
let squaresNumber = prompt("Введите размер доски(кол-во квадратов)");
const SQUARES_NUMBER = squaresNumber;
const colors = [
  "#41ff00",
  "#0063ff",
  "#f400ff",
  "#ff0079",
  "#00f5ff",
  "#ffd100",
  "#ff6600",
  "#00ff84",
];

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", setColor);
  square.addEventListener("mouseleave", removeColor);

  board.append(square);
}

function setColor(event) {
  const element = event.target;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
