//switch
function mySwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "one";
      break;
    case 2:
      answer = "two";
      break;
    default:
      answer = "out of range";
  }

  return answer;
}

console.log(mySwitch(2));

//Math
function abTest(a, b) {
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2, 2));
