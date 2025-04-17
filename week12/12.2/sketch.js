let soundA, soundB, soundC;

function preload() {
  soundA = loadSound('assets/retro-coin-1.mp3');
  soundB = loadSound('assets/retro-coin-2.mp3');
  soundC = loadSound('assets/retro-coin-3.mp3');
}

function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background("DarkOrange");
  fill("AntiqueWhite");
  text("Insert Coin: Press A, B, or C", width / 2, height / 2);
}

function keyPressed() {
  if (key === 'A' || key === 'a') {
    soundA.play();
  } else if (key === 'B' || key === 'b') {
    soundB.play();
  } else if (key === 'C' || key === 'c') {
    soundC.play();
  }
}
