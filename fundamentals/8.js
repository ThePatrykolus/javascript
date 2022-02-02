//random
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomRange(5, 20));

//parseInt
function convertToInt(string) {
  return parseInt(string);
}
convertToInt("56");

function convertToDecimalInt(string) {
  return parseInt(string, 2);
}

convertToDecimalInt("10011");

// ternary operator
condition ? true : false;

if (condition) {
  return true;
} else {
  return false;
}

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
