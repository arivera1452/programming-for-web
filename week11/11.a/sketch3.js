// Time tracking and base noise offsets
let startTime;
// base noise offsets
let baseOffsetX1 = 0;      
let baseOffsetY1 = 1000;   
let baseOffsetX2 = 2000;   
let baseOffsetY2 = 3000;  

function setup() {
  createCanvas(800, 600);     // Set canvas size
  background(255);            // Fill background with white once
  strokeWeight(1.5);          // Default line thickness
  startTime = millis();       // Record the start time in milliseconds
}

function draw() {
  // Check if 30 seconds have passed
  if (millis() - startTime > 30000) {
    noLoop();  // stop the loop
    return;
  }

  // blur by drawing multiple slightly offset lines each frame
  for (let i = 0; i < 200; i++) {

    // Add a small random blur to the base Perlin noise offsets
    // This makes each of the 20 lines slightly different
    let blurFactor = .05;
    let noiseOffsetX1 = baseOffsetX1 + random(-blurFactor, blurFactor);
    let noiseOffsetY1 = baseOffsetY1 + random(-blurFactor, blurFactor);
    let noiseOffsetX2 = baseOffsetX2 + random(-blurFactor, blurFactor);
    let noiseOffsetY2 = baseOffsetY2 + random(-blurFactor, blurFactor);

    // positions from Perlin noise and scale them to canvas size
    let x1 = noise(noiseOffsetX1) * width;
    let y1 = noise(noiseOffsetY1) * height;
    let x2 = noise(noiseOffsetX2) * width;
    let y2 = noise(noiseOffsetY2) * height;

    // color for blending effects
    stroke(
      random(255),      
      random(100, 255),       
      random(255),       
      1                      
    );

    // drawing the line with the calculated points
    line(x1, y1, x2, y2);
  }

  // moving the base noise offsets each frame
  let moveSpeed = 1;
  baseOffsetX1 += moveSpeed;
  baseOffsetY1 += moveSpeed;
  baseOffsetX2 += moveSpeed;
  baseOffsetY2 += moveSpeed;
}
