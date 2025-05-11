let osc;              // object for generating tones
let ripples = [];     // array to store active ripple effects

let isRecording = false;        
let isLooping = false;          
let recordStartTime = 0;        
let loopStartTime = 0;          
let loopDuration = 5000;        
let recordedEvents = [];        // array stores recorded key/ripple events

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Futura");
  textAlign(CENTER, CENTER);
  textSize(30);

  osc = new p5.Oscillator('sine');
  // osc.start() triggered in keyPressed after user interaction
}

function draw() {
  background(0, 58, 100, 90);

  if (!isRecording && !isLooping) {
    fill(255);
    text("Press keys 1-9 to begin a 5s looping sequence.", width / 2, height / 2);
  } else if (isRecording) {
    let timeLeft = (loopDuration - (millis() - recordStartTime)) / 1000;
    fill(255, 255, 0);
    text("Recording... " + timeLeft.toFixed(1) + "s left", width / 2, height / 2);

    if (millis() - recordStartTime >= loopDuration) {
      isRecording = false;
      isLooping = true;
      loopStartTime = millis();
    }
  } else if (isLooping) {
    fill(0, 255, 255);
    text("Looping. Press 'R' to reset.", width / 2, height / 2);

    let loopElapsed = (millis() - loopStartTime) % loopDuration;

    for (let event of recordedEvents) {
      if (!event.played && loopElapsed >= event.time) {
        playToneAndRipple(event.freq, event.x, event.y);
        event.played = true;
      }
    }

    if (loopElapsed < deltaTime) {
      for (let event of recordedEvents) {
        event.played = false;
      }
    }
  }

  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();
    if (ripples[i].isDone()) {
      ripples.splice(i, 1);
    }
  }
}

function keyPressed() {
  // Resume AudioContext and start oscillator
  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
    osc.start();      
    osc.amp(0);       
  }

  if (key === 'r' || key === 'R') {
    isRecording = false;
    isLooping = false;
    recordedEvents = [];
    return;
  }

  if (key >= '1' && key <= '9') {
    let freq = map(int(key), 1, 9, 200, 1000);
    let x = random(width);
    let y = random(height);

    playToneAndRipple(freq, x, y);

    if (!isRecording && !isLooping) {
      isRecording = true;
      recordStartTime = millis();
      recordedEvents = [];
    }

    if (isRecording) {
      recordedEvents.push({
        time: millis() - recordStartTime,
        freq: freq,
        x: x,
        y: y,
        played: false
      });
    }
  }
}

function keyReleased() {
  if (key >= '1' && key <= '9') {
    osc.amp(0, 0.5);
  }
}

function playToneAndRipple(freq, x, y) {
  osc.freq(freq);
  osc.amp(0.4, 0.05);
  osc.amp(0, 0.5);
  ripples.push(new Ripple(x, y));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 5;
    this.opacity = 255;
  }

  update() {
    this.radius += 8;
    this.opacity -= 1;
  }

  display() {
    noFill();
    stroke(0, 150, 255, this.opacity);
    strokeWeight(3);
    ellipse(this.x, this.y, this.radius * 2);
  }

  isDone() {
    return this.opacity <= 0;
  }
}
