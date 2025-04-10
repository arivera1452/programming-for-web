// creates the grid spacing
let spacing = 40;

function setup() {
    createCanvas(400, 400);
    stroke("white");
    // calling function to draw the pattern
    drawPattern();
    strokeWeight(2);
    
  }

// pattern function using nested loops with ellipses and lines
  function drawPattern() {
    background(255)
    for (let y = 0; y < height; y += spacing) {
        for (let x = 0; x < width; x += spacing) {
        // creates a random color for each circle on refresh
          fill(random(255), random(255), random(255));
          ellipse(x + spacing / 2, y + spacing / 2, 60);
        }
      }
  
      for (let y = 0; y < height; y += spacing) {
          for (let x = 0; x < width; x += spacing) {
             line(x + spacing * 2, y + spacing * 2, x, y)
          }
        }
  }
// lets you click the mouse to refresh the colors in the pattern
  function mousePressed() {
    drawPattern();
}



  