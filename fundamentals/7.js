var contacts = [
  {
    firstName: "Tomasz",
    lastName: "Bomba",
  },
  {
    firstName: "Basia",
    lastName: "Banach",
  },
];

function lookUpProfile(name, prop) {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "Property doesnt exist"; //return property if it exists
    }
  }
}

var data = lookUpProfile("Tomasz", "wzrost");
