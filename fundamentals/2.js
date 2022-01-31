//strings are immutable,
var myStr = "Jello World";
myStr[0] = "H"; //error
myStr = "Hello World"; //this works

//functions
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb;

  return result;
}
console.log(wordBlanks("dog", "big", "ran", "quickly"));

//arrays
var ourArray = ["John", 23, 14];
ourArray[2] = 15;
ourArray.push("Cow"); //push to array as last element

var newArray = [1, 2, 3];
var removedFromOurArray = newArray.pop(); //removedFromOurArray now equals 3, and newArray now equals [1,2]
var removed2FromOurArray = newArray.shift(); //same as pop, but from front. removed2FromArray now equals 1

var array = ["World"];
array.unshift("Hello"); //array is now ["Hello", "World"]

//global vairable
var myGlobal = 10;

function fun2() {
  var output = "";
  var localVariable = 5; //only visible inside the function
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  console.log(output);
}

//global vs local
var myVar = "cat";

function animals() {
  var myVar = "dog"; //local variable has priority over global variable with the same name
  return myVar;
}
console.log(animals()); //"dog"
console.log(myVar); //"cat"
