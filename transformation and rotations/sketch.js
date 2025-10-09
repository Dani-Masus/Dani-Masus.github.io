// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"



function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  clock();
  minuteHand();
}


function minuteHand(){

  push();
  translate(350, 400);
  strokeWeight(4);
  rotate(frameCount);
  line(0, 0, 120, 0);
  pop();
}

function hourHand(){
  //making the hour hand...
  push()
  translate(350, 400)
  pop()
}









function clock(){
  push();
  translate(350, 400);
  circle(0, 0, 300);
  
  fill("Black");
  for(let i = 0; i < 12; i ++){
    rect(105, 0, 35, 3);
    rotate(30);
  }

  fill("DarkGray");

  for(let i = 0; i < 172; i ++){
    rect(125, 0, 10, 1);
    rotate(3);
  }

  
  pop();
}

