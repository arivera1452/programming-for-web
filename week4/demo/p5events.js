// how do events work in p5
// const myRectangle = {
//     x: 100,
//     y: 100,
//     width: 150,
//     height: 100
// }

// const myCircle = {
//     x: 50,
//     y: 50,
//     diameter: 25
// }
function setup() {
     createCanvas(800, 600)
}
const myRectangle = [];
let startingX = 0;
let startingY = 0;
let width = 50;
let height = 150;
let gap = 20;

function draw() {
    background(220)
    noLoop();
    for(let i = 0; i < 10; i++) {
        rect(startingX, startingY, width, height);
        startingX = startingX + width + gap;
    }
    // outer loop for row
    for(let j = 0; j < 2; j++) {
        // inner loop
        // not finished
        rect(startingX, startingY, width, height);
        startingX = startingX + width + gap;
    }

    startingY = startingY + height + gap;
    startingX = 0
    // circle(myCircle.x, myCircle.y, myCircle.diameter)
}

function mousePressed() {
    // const distanceFromCircleCenter = dist(myCircle.x, myCircle.y, mouseX, mouseY);
    // console.log(distanceFromCircleCenter)
    // if(distanceFromCircleCenter <= myCircle.diameter) {
    //     console.log("you hit")
    // } else {
    //     console.log("you missed")
    // }
    // if(
    //     mouseX > myRectangle.x &&
    //     mouseX < (myRectangle.x + myRectangle.width) &&
    //     mouseY > myRectangle.y &&
    //     mouseY < (myRectangle.y + myRectangle.height)
    // ) {
    //     console.log("you hit the rect");
    // } else {
    //     console.log("you missed the rect");
    // }
}