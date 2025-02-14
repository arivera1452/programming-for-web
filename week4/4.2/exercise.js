let rectX = 0;
const rectHeight = 75;
let rectY;
const rectWidth = 75;
let clickCount = 0;
let speed;
function setup() {
    createCanvas(500, 500);
    rectY = random(height - rectHeight)
    speed = random(1, 3);
}

function draw() {
    background("orange");
    drawShape();
    textSize(20);
    text("CLICK THE SQUARE AS FAST AS YOU CAN", 50, 100)
    rectX += speed;
    if(rectX > width) {
        noLoop();
        fill("cyan");
        textSize(30);
        text("YOUR SCORE WAS " + clickCount, 130, 230);
        
    }
}

function mousePressed() {
    if((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= rectY && mouseY <= rectY + rectHeight)) {
        clickCount++;
        console.log("hit", clickCount);
    }
}

function drawShape() {
    fill("cyan")
    rect(rectX, rectY, rectWidth, rectHeight)
}