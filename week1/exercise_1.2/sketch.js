function setup() {
  createCanvas(600, 400);
  // Creates a canvas 600 px wide
  // and 400 px high.
}

function draw() {
  background(250);
 
  //bottom half
  
  stroke(0);//black outline

  strokeWeight(2);//outline thickness
  
  fill ("tan");

  rect(0, 200, 600, 200)

  // emojis
  textSize(75);
  text("🌲", 550, 200)
  text("🌲", 500, 200)
  text("🌲", 450, 200)
  text("🌲", 400, 200)
  text("🌲", 350, 200)
  text("🌲", 300, 200)
  text("🌲", 250, 200)
  text("🌲", 200, 200)
  text("🌲", 150, 200)
  text("🌲", 100, 200)
  text("🌲", 50, 200)
  text("🌲", 0, 200)
  text("🌲", -50, 200)
  text("press to change",30 ,100)
  text("🐈", mouseX, mouseY);//cat
  if (mouseIsPressed) {
    text("🐈‍⬛", mouseX, mouseY);
  }
  
}
window.alert("Do you like orange or black cats?")