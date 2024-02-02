//numbers(integers, floats), strings
const a = 5;
const b = 10;
let myName = "hyejin"; //We are able to update. Never user "var"

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "Hyejin Yu";

console.log("your new name is " + myName);

/*Boolean* true or false */
const amIfat = true;
console.log(amIfat);

/*const amIfat = null; full of nothingness, value is null. never happended naturally.*/
let something; /*undefined: somthing is there but not defiend vaule */
console.log(something);

/*array* make the list of data, getting items inside of array*/
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek);
// Get Item from Array
console.log(daysOfWeek[4]); //computer count from "0"

// Add one more day to to the array, push fuctions
daysOfWeek.push("sun"); //add things
console.log(daysOfWeek);

daysOfWeek[2] = "mon2"; //setting of value of 2
console.log(daysOfWeek);

//Objects
const player = {
  name: "nico",
  points: 10,
  fat: true,
};

console.log(player);
console.log(player.name);
console.log(player.fat);

//update, access
player.fat = false;
console.log(player);
player.points = player.points + 15;
console.log(player.points);

//add objects
player.lastName = "potato";
console.log(player);

//function: Piece of code you can excute over and over. Playing song.
function sayHello(nameOfPerson, age) {
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Hyejin", 10); //Way of play function, sending
sayHello("Tomas", 15);
sayHello("Lynn", 32);
sayHello("Nico", 49);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  //a, b is just placeholders
  console.log(a / b);
}
plus(8, 20);
plus(9, 87);
divide(10, 2); //a, b order is important!!
