// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let car;



function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(200, 300, random(60, 150), random(20, 50));
}

function draw() {
  background(220);
  drawRoad();
  car.display();
}

function drawRoad(){
  //make a two lane road seperated by a yellow dashed line
  fill("black");
  rect(0, 250, width, 400);
  fill("yellow");
  rect(0, 435, width, 10);
}


class Vehicle{
  constructor(x,y, w, h) {
    //properties related to position/display
    this.x = x; this.y = y; this.w = w; this.h = h;
    this.c = color(random(255),random(255),random(255));

    //properties related to movement
    this.xTime = random(10);  this.yTime = random(10);
    this.timeShift = 0.01;  this.maxSpeed = 5;


  }

  //2 class methods
  display(){
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);

  }

  move(){
    let xSpeed = noise(this.xTime); 
    xSpeed = map(xSpeed, 0, 1, -this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;

    this.x += xSpeed;
    if(this.x < 0) this.x = width;
    else if (this.x > width) this.x = 0;
  }
}