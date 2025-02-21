let bubble;
let startingX = Math.floor(Math.random() * 600);
let startingY = Math.floor(Math.random() * 400);

function setup() {
    createCanvas(600, 400);
    // this is the cookie
    bubble = new Bubble();
    // print = console.log
    print(bubble.x, bubble.y)
}

function draw() {
    background(0);
    for(let i = 0; i < 5; i++) {
        bubble.move();
        bubble.show();
    }
}

// class = what it means to be a 'bubble' (cookie cutter)
class Bubble {
    // like an object's setup
    constructor() {
        this.x = startingX;
        this.y = startingY;
    }
    // function within class (don't have to write function)
    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(4);
        noFill();
        ellipse(this.x, this.y, 50, 50);
    }
}