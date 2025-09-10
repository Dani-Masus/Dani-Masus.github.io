// Project Title
// Kingston
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() { //runs over and over
                  // Targeting 60 frames per sec
  background(220);
  fill(255,mouseX,0);
  circle(mouseX,mouseY, 30);
}

