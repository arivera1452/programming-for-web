// Functions
// like a macro for a game

// fn construction
// function sayHi(){
//     window.alert("Hi Andrew")
//     console.log("hello")
//     console.log("your name is ");
// };
// Calling a fn
// sayHi();
// function sayHi(name){
//     console.log("hello");
//     console.log("your name s " + name);
// };
// sayHi("Andrew");
// sayHi("Bob");

// definition of function
// function add2Numbers(num1, num2){
//     console.log(num1 + num2);
// };
// call
// add2Numbers(4, 5);
// add2Numbers(12, 4);
// function carSpecs(carObject){
//     console.log("your car is ", carObject.color)
//     console.log("it has " + carObject.tires + " tires");
// };
// carSpecs({color: "red", tires: 4});

// this - object oriented programming (not accurate)
// function makePet(animal, color){
//     this.animal = animal;
//     this.color = color;
//     console.log(this);
// }
// makePet("rabit", "white");

// returing data from a fuction (and pure functions)
// function add2Numbers(num1, num2){
//     console.log(num1 + num2);
//     // return
//     return num1 + num2;
// }
// const newNumber = add2Numbers(10, 16);
// const otherNumber = add2Numbers(7, 14);
// console.log("new number", newNumber);

// function chooseRandomArrayItem(inputArray){
//     const randomIndex = Math.floor(Math.random() * inputArray.length);
//     return inputArray[randomIndex];
// }
// const names = ["Ken", "Andrew", "Tess", "Brian"]
// console.log(chooseRandomArrayItem(names));
// console.log(chooseRandomArrayItem(names));
// const colors = ["red", "purple", "green"]
// console.log(chooseRandomArrayItem(colors))

// declaritive uses function keyword
// other ways to create function
// note: no "this"

// fat arrow =>
// const myCoolFunction = (myArg) => {
//     console.log("expression fun", myArg)
// }
// myCoolFunction("fun");

// Looping
// const cars = ["Honda", "Ford", "Chevy", "Kia", "Audi", "Volkswagon"];
// iterations and data types that support it

// array loops
// for loop
// for (let loopVar = 0; loopVar < cars.length; loopVar++) {
//     if(cars[loopVar] !== "Audi"){
//          console.log("I don't have a", cars[loopVar]);
//     } else {
//         console.log("I wish I had an", cars[loopVar])
//     }

// }

// objects loops
// for in
// const myObj = {
//     brand: "Audi",
//     model: "Quatro",
//     color: "Blue"
// }
// for(let prop in myObj) {
//     console.log("prop is", prop);
//     console.log("value is", myObj[prop]);
// }

// while loops with conditions
// let myNumber = 0;
// while(myNumber < 10) {
//     console.log("my nubmer", myNumber);
//     myNumber++;
// }

// applying learnings -- loops in p5
// let startingX = 0;
// let width = 100;
// let height = 100;
// let space = 25;
function makeCircleSquare(x, y, color) {
    fill(200);
    rect(x, y, 100, 100);
    fill(color);
    ellipse(x + 50, y + 50, 100)
}
const coordinates = [
    {x: 0, y: 10},
    {x: 250, y: 500},
    {X: 100, y: 100}
]
function setup() {
    createCanvas(600, 600);
    background(0)
}

function draw() {
    noLoop();
    makeCircleSquare(200, 200, "red");
    // fill(255);
    // for(let i = 0; i < coordinates.length; i++)
    // {
    //     rect(coordinates[i].x, coordinates[i].y, 50, 50);
    // }
    // for(let i = 0; i < 5; i++) {
    // rect(startingX, 200, width, height);
    // startingX+=(width+space);
    // width-=10;
    // space+=10;      
    // }
}

