console.log("hello world :)");

// 7 Primitive data types:
// undefined, null, boolean, string, symbol, number and bigint

// 3 Non-primitive data types:
// Object, Array and Function

var a = "First"; //used in a scope of whole program
let b = 2; //used only in scope where it was declared, ex. function
const pi = 3.14; //immutable

var c; //declaration
c = 10; //assignment
var d = "snake"; //initialization

// 5 data typed passed by value:
// Boolean, null, undefined, String and Number
// THEY HAVE NO RELATIONSHIP WITH EACH OTHER. Values are copied.

d = c; //this is not a reference to c. Data is passed by value - it is simply COPIED.
console.log(d);
c = 11;
console.log(d);

// 3 data types passed by reference:
// Array, Function and Object
// Variables that are assigned a non-primitive value are given a reference to that value
// Objects are copied by reference!
