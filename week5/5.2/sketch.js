// bubble array
let bubble = [];

function setup() {
    createCanvas(600, 400);
    // print = console.log
    print(bubble.x, bubble.y);
    for(let i = 0; i < 5; i++) {
        bubble.push(new Bubble())
    }
}

function draw() {
    background(0);
    // for loop of bubbles
    for(let i = 0; i < bubble.length; i++) {
        bubble[i].move();
        bubble[i].show();
    }
}

// class = what it means to be a 'bubble' (cookie cutter)
class Bubble {
    // like an object's setup
    constructor() {
        this.x = random(width);
        this.y = random(height);
    }
    // function within class (don't have to write function)
    move() {
        this.x += random(-5, 5);
        this.y += random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 50, 50);
    }
}