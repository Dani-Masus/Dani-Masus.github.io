// working with images
// and random() and noise()
// mr scott
// 9/24/2025


let x1, y1, x2, y2;
let d1, d2;
let noiseTime = 5, noiseSpeed = 0.1; 
//noise speed controls how connected our random noise values are.
let minSize = 5; let maxSize = 200;

let mX, mY; //move x and y

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = width*0.3; y1 = height*0.5;
  x2 = width*0.7; y2 = height*0.5;
  mY - height*0.3;
  //frameRate(10);
}

function noiseMove(){
  circle(mX, mY, 50);
}

function draw() {
  background(220);
  randomCircle();
  noiseCircle();
  circle(x2,y2,d2);
  noiseTime += noiseSpeed;
}


function noiseCircle(){
// draw a fixed circle with randomly
//changing (but smoothe... hopefully) diameters
  d2 = noise(noiseTime); //yeilds value between 0-1
  d2 = map(d2, 0, 1, minSize, maxSize);
  fill(123,200,55)
}

function randomCircle(){

  fill(50,150,200);
  d1 = random(minSize,maxSize);
  circle(x1, y1, d1)
}