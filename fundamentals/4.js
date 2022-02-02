//objects
var ourDog = {
  name: "Camper",
  legs: 4,
  tails: 1,
  friends: ["everything!"],
  "one two": "three",
  16: "Some value",
};

var dogName = ourDog.name;
var dogLegs = ourDog["legs"];
var dogOneTwo = ourDog["one two"]; //no other way to access the property, because of space

var myNumber = 16;
var somthing = ourDog[myNumber]; //use variable to take access property value

//adding object property
ourDog.bark = "haw haw";
ourDog["weight"] = "15 kg";

//deleting object property
delete ourDog.tails;

//check if object property exists
ourDog.hasOwnProperty("name");
