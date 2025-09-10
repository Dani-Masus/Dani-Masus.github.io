// coordinate system/User events
// Mr. Scott
// sept 10, 2025
//first look in interactive programs with p5.js


function setup() {
  createCanvas(windowWidth, windowHeight);
  print(windowWidth, windowHeight, width, height)
  //windowwidth; current browser width
  //width;            canvas width
}

function draw() { //runs over and over
  // Targeting 60 frames per sec

  //Strive to keep draw() clean and tidy

  background(220);  //draws a big solid retangle
  //  0 - black   255 - white

  DrawTwoCircles();

}

function DrawTwoCircles() {  //{alt}{shift}{f} = autoformate
  //draw two circles at a fixed location
  //and one at mouse location
  fill(0, 225, 0);
  //  r,   g,   b
  circle(mouseX, mouseY, 30);

  circle(width/2, height/2, 100);

}