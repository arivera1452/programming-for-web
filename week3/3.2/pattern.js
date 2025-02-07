function setup() {
    createCanvas(600, 600);
}

function createTile(originX, originY, stroke1, stroke2, stroke3) {
    translate(originX, originY);
    // background square
    fill("grey");
    rect(0, 0, 200, 200);
    // straight lines
    stroke("tan");
    strokeWeight(stroke1);
    line(0, 0, 100, 200);
    line(100, 0, 0, 100);
    line(0, 50, 200, 70)
    noStroke();
    noFill();
    stroke("tan")
    strokeWeight(stroke2)
    circle(100, 100, 65);
    circle(130, 130, 55);
    circle(160, 160, 45);
    circle(185, 185, 35);
    fill("tan")
    stroke("black");
    strokeWeight(stroke3);
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
    createTile(0, 0, 5, 3, 7);
    createTile(0, 200, 1, 2, 3);
    createTile(0, 200, 9, 2, 5);
    createTile(200, -400, 12, 2, 14);
    createTile(0, 200, 5, 20, 1);
    createTile(0, 200, 8, 7, 3);
    createTile(200, -400, 6, 9, 12);
    createTile(0, 200, 4, 5, 6);
    createTile(0, 200, 3, 14, 5);
}