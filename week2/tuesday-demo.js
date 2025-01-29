// const name = "Andrew"; // string 
// let age = 30; // number
// const isLying = true; // boolean
// const = variables that don't change
// let = variables that do change

// Arrays
// how to mak arrays
// let cars = ["Honda", "Hyundai", "Ford", "Chevy"];
// let luckyNumbers = [7, 13, 22];
// let comboArray = [7, "Honda", true];
// let myOtherArray = new Array();
// myOtherArray[0] = "bob";
// how to access data in arrays
// cars[2] = "Jaguar";
// console.log("a single car", cars[2]);
// list the var name and then the index
// index starts at 0 for the first item

// how to manipulate data in arrays
// push to add to the end
// cars.push("Kia");
// console.log("cars", cars);
// pop to remove last item
// pop will return the removed item
// const lastItem = cars.pop();
// console.log("after pop", cars);
// console.log("last item", lastItem)
// shift - removes first element and returns it
// const firstItem = cars.shift();
// console.log("cars after shift", cars, firstItem);

// lenth will return the number of items in the array
// console.log("I have " + cars.length + " cars");
// trick - array.length minus 1 will access last item
// console.log(cars[cars.length -1]);
// slice
// cars.push("Fiat");
// cars.push("Jeep");
// cars.push("Chrysler");
// const subArray = cars.slice(1, 3);
// console.log("sub array", subArray);
// splice
// console.log("cars before splice", cars)
// cars.splice(2, 2);
// console.log("cars after splice", cars)

// Objects - How to make them
const myCar = {
    color: "red", // color is the property, red is the value
    wheels: 4,
    engine: "gas",
    bodyType: "sedan",
    car: "Honda",
    model: "Accord",
};
const myClass = {
    language: "Javascript",
    college: "MCAD",
    meetingNight: "Tuesday",
    students: [
        "Brian",
        "Tess",
        "Arden",
        "Kelsey",
    ]
}
// properties
myClass.meetingNight = "Wednesday";
myClass["language"] = "Typescript";
myClass.students.push("Andrew");
console.log("my class", myClass);
// deleting a property
delete myClass.language;
console.log("my class after delete", myClass);

// making an array of objects
const questionsAndAnswers = [
    {
        question: "what is a bird",
        answer: "an animal that flies"
    },
    {
        question: "where is north",
        answer:"up",
    },
    {
        question: "how do you make green",
        answer:"blue and yellow",
    },
    {
        question: "what is a tint",
        answer:"a color plus black",
    }
];

// Math.random()
const arrayLength = 4; // magic number
console.log(Math.floor(Math.random() * 4));
const randomNumber = Math.floor(Math.random() * questionsAndAnswers.length);

const answer = window.prompt(questionsAndAnswers[randomNumber].question);
if(answer.toLowerCase() === questionsAndAnswers[randomNumber].answer.toLowerCase()); {
    window.alert("correct");
} 
else {
    window.alert("incorrect");
}


