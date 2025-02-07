function setup() {
    createCanvas(200, 200);
}

function createTile() {
    translate(0, 0);
    // background square
    fill("grey");
    rect(0, 0, 200, 200);
    // straight lines
    stroke("tan");
    strokeWeight(5);
    line(0, 0, 100, 200);
    line(100, 0, 0, 100);
    line(0, 50, 200, 70)
    noStroke();
    noFill();
    stroke("tan")
    strokeWeight("3")
    circle(100, 100, 65);
    circle(130, 130, 55);
    circle(160, 160, 45);
    circle(185, 185, 35);
    fill("tan")
    stroke("black");
    strokeWeight("3");
    rect(150, -10, 50, 50)
    noFill();
    ellipse(50, 150, 150);
    ellipse(50, 150, 125);
    ellipse(50, 150, 100);
    ellipse(50, 150, 75);
    ellipse(50, 150, 50);
    ellipse(50, 150, 25);
}

function draw() {
    createTile();
}