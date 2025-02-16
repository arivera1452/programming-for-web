const rectHeight = 210;
const rectWidth = 150;
let startingX = 50;
let startingY = 60;
let myRect = [];
function setup () {
    createCanvas(1500, 840);
    background(50);
    for (let k = 0; k < 3; k++) {
        for (let i = 0; i < 4; i++) {
            rect(startingX, startingY, rectWidth, rectHeight, 7);
            myRect.push({ x: startingX, y: startingY });
            startingX += 200;
        }
        startingY += 250;
        startingX = 50;
    }
}





