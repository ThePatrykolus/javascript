let ROWS = 2;
let COLS = 2;
let SIZE = 24;
const canvas = document.getElementById("canvas");

const cells = new Map();
const revealedKeys = new Set();
let map = generateMap(["1-1"]);

function toKey(row, col) {
  return row + "-" + col;
}

function fromKey(key) {
  return key.split("-");
}

function createButtons() {
  canvas.style.width = ROWS * SIZE + "px";
  canvas.style.height = COLS * SIZE + "px";

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
        let value = map.get(key);
        cell.textContent = value.toString();
        switch (value) {
          case undefined:
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
          case "bomb":
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

function getNeighbour(key) {
  const [row, col] = fromKey(key);
}

function generateMap(seedBombs) {
  const map = new Map();

  function incrementDanger(neighbourKey) {
    if (!map.has(neighbourKey)) {
      map.set(neighbourKey, 1);
    } else {
      const oldVal = map.get(neighbourKey);
      if (oldVal !== "bomb") {
        map.set(neighbourKey, oldVal + 1);
      }
    }
  }

  for (let key of seedBombs) {
    map.set(key, "bomb");
    // give all bomb neighbours +1 to value
    for (let neighbourKey of getNeighbour(key)) {
      incrementDanger(neighbourKey);
    }
  }

  return map;
}

createButtons();
