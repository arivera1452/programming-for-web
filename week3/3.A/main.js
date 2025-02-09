let rotateBy = 3;
function setup(){
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
    // click to stop
    textSize(24);
    fill("cyan");
    text("Click to stop.", 235, 300);
}
function makeArm(rotateBy, stroke1, stroke2, weight1, weight2){
    let alt = Math.round(rotateBy / 360);
    // white ellipse
    noFill();
    stroke(stroke1);
    strokeWeight(weight1);
    ellipse(125 / alt, 125 * alt, 150 * alt);
    // cyan sqaure
    stroke(stroke2)
    strokeWeight(weight2);
    square(200, 200 + alt, 100)

}

function draw(){
    translate(300, 300);
    rotate(rotateBy);
    // call with parameters
    makeArm(rotateBy, "white", "cyan", 2, 3);
    rotateBy +=3;
}

function mousePressed(){
    noLoop();
}