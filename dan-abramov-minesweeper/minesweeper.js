let ROWS = 9;
let COLS = 9;
let SIZE = 24;
const canvas = document.getElementById("canvas");

const cells = new Map();
const revealedKeys = new Set();
const flaggedKeys = new Set();
let map = generateMap(generateBombs());

function toKey(row, col) {
  return row + "-" + col;
}

function fromKey(key) {
  return key.split("-").map(Number);
  // const [row, col] = key.split("-");
  // return [Number(row), Number(col)];
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
      cell.oncontextmenu = (e) => {
        e.preventDefault();
        toggleFlag(key);
        updateButtons(); //rerenders buttons
      };
      cell.onclick = () => {
        if (!flaggedKeys.has(key)) {
          propagateReveal(key);
          updateButtons();
        }
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

      cell.disabled = false;
      cell.textContent = "";
      cell.style.color = "";
      cell.style.backgroundColor = "";

      if (revealedKeys.has(key)) {
        cell.disabled = true;
        let value = map.get(key);
        if (value) {
          cell.textContent = value.toString();
        }
        switch (value) {
          case undefined:
          // as is
          case 1:
            cell.style.color = "blue";
            break;
          case 2:
            cell.style.color = "green";
            break;
          case 3:
            cell.style.color = "red";
            break;
          case 4:
            cell.style.color = "darkblue";
            break;
          case 5:
          case 6:
          case 7:
          case 8:
            cell.style.color = "black";
            break;
          case "bomb":
            cell.textContent = "💣";
            cell.style.color = "black";
            // cell.style.backgroundColor = "red";
            break;
          default:
            throw Error("Switch value error");
        }
      } else if (flaggedKeys.has(key)) {
        cell.textContent = "🚩";
      }
    }
  }
}

//function updateOneButton(key)

function toggleFlag(key) {
  if (flaggedKeys.has(key)) {
    flaggedKeys.delete(key);
  } else {
    flaggedKeys.add(key);
  }
}

function propagateReveal(key) {
  revealedKeys.add(key);

  // if(map.get(key) === undefined)
  const isEmpty = !map.has(key);
  if (isEmpty) {
    for (let neighbourKey of getNeighbour(key)) {
      if (!revealedKeys.has(neighbourKey)) {
        propagateReveal(neighbourKey);
      }
    }
  }

  updateButtons();
}

function isInBounds([row, col]) {
  if (row < 0 || col < 0) {
    return false;
  }
  if (row >= ROWS || col >= COLS) {
    return false;
  }
  return true;
}

function getNeighbour(key) {
  const [row, col] = fromKey(key);
  // const neighbourRowCols = [
  //   [row - 1, col - 1],
  //   [row - 1, col],
  //   [row - 1, col + 1],
  //   [row, col - 1],
  //   [row, col + 1],
  //   [row + 1, col - 1],
  //   [row + 1, col],
  //   [row + 1, col + 1],
  // ];
  const neighbourRowCols = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (!(i === 0 && j === 0)) {
        neighbourRowCols.push([row + i, col + j]);
      }
    }
  }
  return neighbourRowCols.filter(isInBounds).map(([r, c]) => toKey(r, c));
}

function generateBombs() {
  const count = Math.round(Math.sqrt(ROWS * COLS)) + 1;
  const bombs = [];
  const allKeys = [];

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      allKeys.push(toKey(i, j));
    }
  }

  allKeys.sort(() => {
    const coinFlip = Math.random() > 0.5;
    return coinFlip ? 1 : -1;
  });
  // arr.slice(2) - returns last 3 elements from array;
  // arr.slice(0, 2) - returns element 0 and 1;
  return allKeys.slice(0, count);
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
      console.log(neighbourKey);
      incrementDanger(neighbourKey);
    }
  }
  console.log(map);

  return map;
}

createButtons();
