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
