//destructuring
var vector = { x: 3.6, y: 7.4, z: 6.54 };

var x = vector.x;
var y = vector.y;
var z = vector.z;

const { x: a, y: b, z: c } = vector; //a = 3.6, b = 7.4, c = 6.54

//---
const AVG_TEMPERATURES = {
  today: 20,
  tommorow: 24,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tommorow: tempOfTomorrow } = avgTemperatures; //destructuring. variable tempOfTommrow has value of tommorow from avgTemperatures object
  return tempOfTomorrow;
}

//---
const AVG_TEMPERATURES = {
  today: { min: 20, max: 23 },
  tommorow: { min: 17, max: 19 },
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const {
    tommorow: { max: maxTempOfTomorrow, min: minTempOfTommorow },
  } = avgTemperatures;
  return maxTempOfTomorrow;
}

//destructuring assignment
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // z = 1, x = 2, y = 4

let a = 8,
  b = 6;
() => {
  "use strict";
  [a, b] = [b, a]; //a = 6, b = 8
};

//---
const source = [1, 2, 3, 4, 5, 6, 7];

function removeFirstTwo(list) {
  const [, , ...arr] = list; //arr = [3, 4, 5, 6, 7]
  //   const [a, b, ...arr] = list; //a = 1,  b = 2, arr = [3, 4, 5, 6, 7]
  return arr;
}

// pass object parameters using destructuring
const stats = {
  max: 10,
  median: 34,
  type: "normal",
  min: 1,
};

const half = ({ max, min }) => {
  return max + min / 2;
};

console.log(half(stats));
