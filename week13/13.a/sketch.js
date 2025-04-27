let bubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    bubbles.push(new Bubble());
  }
}

function draw() {
  background(0, 10, 20);
  
  for (let bubble of bubbles) {
    bubble.update();
    bubble.show();
  }
}

// Bubble class
class Bubble {
  constructor() {
    this.reset();
  }
  
  reset() {
    this.x = random(width);
    this.y = random(height, height + 200); // start below canvas
    this.r = random(5, 20); // bubble size
    this.speed = random(1, 4);
    this.wobble = random(TWO_PI);
    this.color = color(100, 200, 255, 100); // semi-transparent light blue
  }
  
  update() {
    this.y -= this.speed;
    this.x += sin(this.wobble) * 0.5; // wobble side to side
    this.wobble += 0.1;
    
    if (this.y < -this.r) {
      this.reset();
    }
  }
  
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.r);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
