//var, let, const

var catName = "Quincy";
var catName = "Beau";

// let doesnt allow to declare a variable twice
let catName2 = "Lila";
catName2 = "Rex";

function catTalk() {
  "use strict"; //strict mode which catches common mistakes and unsafe actions

  catName = "Oliver";
  return catName + " says Meow!";
}

//var is either global or local when declared inside function. let is always limited to the block statement it was declared in

function checkScope() {
  "use strict";
  var i = "function scope";
  if (true) {
    i = "block scope";
    console.log("Block scope: ", i);
  }
  console.log("Function scope: ", i);
}
//prints "block scope" twice

function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope: ", i);
  }
  console.log("Function scope: ", i);
}
//prints "block scope" then "function scope"

function checkScope() {
  "use strict";
  if (true) {
    var i = "block scope";
    console.log("Block scope: ", i);
  }
  console.log("Function scope: ", i);
}
//also prints "block scope" twice

//const is same as let, but read only
//however you can mutate an array declared with const
//CONST DOESNT PREVENT MUTATION

const array = [5, 7, 2];
array = [1, 2, 3]; //ERROR
array[0] = 2; //correct

//preventing const mutation by Object.freeze()
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
