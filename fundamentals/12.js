const createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};

//function createPerson2 is exactly the same as createPerson
const createPerson2 = (name, age, gender) => ({ name, age, gender });

//an object can contain a function
const bicycle = {
  gear: 2,
  setGear: function (newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

//same as bicycle object, different notation
const bicycle2 = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

//CLASSES AND OBJECTS

//object constructor
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};

var zeus = new SpaceShuttle("Jupiter");
console.log(zeus.targetPlanet);

//class notation
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

//===
function makeClass() {
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);

//getters and setters
class Book {
  constructor(author) {
    this._author = author; //_ is local variable
  }
  get writer() {
    return this._author;
  }
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

//==
function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature; //using getter
thermos.temperature = 26; //using setter
temp = thermos.temperature; // using getter again
