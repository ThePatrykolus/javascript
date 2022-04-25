let ROWS = 2;
let COLS = 2;
let SIZE = 24;
let canvas = document.getElementById("canvas");

let cells = new Map();
let revealedKeys = new Set();
let values = new Map([
  ["0-0", -1],
  ["0-1", 1],
  ["1-0", 2],
  ["1-1", 3],
]);

function toKey(row, col) {
  return row + "-" + col;
}

function createButtons() {
  canvas.style.width = ROWS * SIZE;
  canvas.style.height = COLS * SIZE;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      let cell = document.createElement("button");
      cell.style.float = "left";
      cell.style.width = SIZE + "px";
      cell.style.height = SIZE + "px";
      cell.onclick = () => {
        revealCell(key);
      };
      canvas.appendChild(cell);
      let key = toKey(i, j);
      cells.set(key, cell);
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
        switch (value) {
          case 0:
            cell.textContent = "";
          case 1:
            cell.style.color = "blue";
            break;
          case 2:
            cell.style.color = "green";
            break;
          case 3:
            cell.style.color = "red";
            break;
          case -1:
            cell.textContent = "💣";
            cell.style.backgroundColor = "red";
            break;
        }
      } else {
        cell.disabled = false;
        cell.textContent = "";
        cell.style.color = "";
      }
    }
  }
}

//function updateOneButton(key)

function revealCell(key) {
  revealedKeys.add(key);
  updateButtons();
}

createButtons();
