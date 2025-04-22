let soundA, soundB, soundC, soundD, soundE, soundF, soundG;
let soundQueue = [];
let timerStartedAt = false;
let timerRunning = false;
let TIME_LIMIT = 5000; 
let loopingSequence = false;

function preload() {
  soundA = loadSound('assets/retro-coin-1.mp3');
  soundB = loadSound('assets/retro-coin-2.mp3');
  soundC = loadSound('assets/retro-coin-3.mp3');
  soundD = loadSound('assets/drum-1.mp3');
  soundE = loadSound('assets/drum-2.mp3');
  soundF = loadSound('assets/synth-1.mp3');
  soundG = loadSound('assets/synth-2.mp3');
}

function setup() {
  createCanvas(800, 200);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(30);
  fill(255);
  text("Press A, S, D, F, G, H, J in any combination to create a 5 second loop.", width / 2, height / 2);

  if (timerRunning && millis() - timerStartedAt >= TIME_LIMIT) {
    startLoopingSequence();
    timerRunning = false;
  }
}

function keyPressed() {
  if (loopingSequence) return; // ignores input once loop starts

  let soundToPlay = null;

  if (key === 'A' || key === 'a') {
    soundToPlay = soundA;
  } else if (key === 'S' || key === 's') {
    soundToPlay = soundB;
  } else if (key === 'D' || key === 'd') {
    soundToPlay = soundC;
  } else if (key === 'F' || key === 'f') {
    soundToPlay = soundD;
  } else if (key === 'G' || key === 'g') {
    soundToPlay = soundE;
  } else if (key === 'H' || key === 'h') {
    soundToPlay = soundF;
  } else if (key === 'J' || key === 'j') {
    soundToPlay = soundG;
  } else if (key === 'Z' || key === 'z') {
    stopAllSounds();
    resetLoop();
    return;
  }

  if (soundToPlay) {
    soundToPlay.play();
    soundQueue.push(soundToPlay);

  //  start or reset timer
  timerStartedAt = millis();
  timerRunning = true;
  }
}

function startLoopingSequence() {
  if (soundQueue.length === 0) return;

  loopingSequence = true;
  playSoundSequence(0);
}

function playSoundSequence(index) {
  if (!loopingSequence) return;

  soundQueue[index].play();

  let nextIndex = (index + 1) % soundQueue.length;

  setTimeout(() => {
    playSoundSequence(nextIndex);
  }, 600);
}

function stopAllSounds() {
  soundA.stop();
  soundB.stop();
  soundC.stop();
  soundD.stop();
  soundE.stop();
  soundF.stop();
  soundG.stop();
}

function resetLoop() {
  soundQueue = [];
  timerRunning = false;
  loopingSequence = false;
}
