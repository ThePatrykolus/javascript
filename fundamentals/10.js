//anonymous function
var magic = function () {
  return new Date();
};

//arrow function
var magic = () => {
  return new Date();
};

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

myConcat([1, 2], [3, 4, 5]);

//arrow functions allow to put them as arguments to other functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 4, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//rest operator
function sum(...args) {
  //const args = [x, y, z]; rest operator makes this line obsolete. Array can have as many arguments as we pass to function, not only 3
  return args.reduce((a, b) => a + b, 0);
}

//spread operator - takes array and spreads into individual parts
const array = [1, 2, 3];
const array2 = [...array];

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
