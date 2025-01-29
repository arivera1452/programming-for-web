let grid = undefined;
let stroke1 = prompt("enter a basic color name in lower case", "gray");
let stroke2 = prompt("enter another basic color lowercase", "black");
function setup() {
    createCanvas(1000, 800);
    background(177, 226, 250);
    grid = loadImage("images/100px_grid.png");
}

function draw() {
    background(grid);
    // snowman legs
    strokeWeight(20);
    stroke(stroke1);
    // body
    fill("white")
    ellipse(500, 600, 400);
    ellipse(500, 400, 300);
    // head
    ellipse(500, 200, 200);
    // hat brim
    stroke(stroke2);
    strokeWeight(40);
    line(400, 120, 600, 120);
    // hat body
    fill(stroke2)
    quad(450, 25, 550, 25, 550, 120, 450, 120);
    // eyes
    stroke(0);
    strokeWeight(40);
    point(460, 175);
    point(540, 175);
    // buttons
    strokeWeight(50)
    point(500, 350);
    point(500, 425);
    point(500, 500);
    // mouth
    noFill();
    strokeWeight(10);
    arc(500, 220, 80, 80, 0, PI);
}