let ROWS = 2;
let COLS = 2;
let SIZE = 24;
let canvas = document.getElementById("canvas");

let cells = new Map();
let revealedKeys = new Set();
let values = new Map([["0-0", 0], ["0-1", 0], [("1-0", 0)], [("1-1", 0)]]);

function toKey(row, col) {
  return row + "-" + col;
}

function createButtons() {
  canvas.style.width = ROWS * SIZE;
  canvas.style.height = COLS * SIZE;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let cell = document.createElement("button");
      cell.style.width = SIZE;
      cell.style.height = SIZE;
      canvas.appendChild(btn);
      let key = toKey(i, j);
      cells.set(key, btn);
    }
  }
}

function updateButtons() {
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let key = toKey(i, j);
      let cell = cells.get(key);
      if (revealedKeys.has(key)) {
        cell.disabled = true;
        let value = values.get(key);
        cell.textContent = value.toString();
      } else {
        cell.disabled = false;
        cell.textContent = "";
      }
    }
  }
}

createButtons();
