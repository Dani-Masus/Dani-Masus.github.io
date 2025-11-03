// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let car;
let eastBound = [];
let westBound = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(0, random(250, 400), 80, 35);

  //do this 20x

  for (let i = 0; i < 20; i++) {
    eastBound.push(new Vehicle(random(0, 700), random(250, 400), 40, 25));
  }

  for (let i = 0; i < 20; i++) {
    westBound.push(new Vehicle(random(0, 700), random(450, 615), 40, 25));
  }


}



function draw() {
  background(220);
  drawRoad();
  //loop through eastbound
  for (let e of eastBound) {
    e.action();
  }


  for (let w of westBound) {
    w.action();
  }



}











function drawRoad() {
  //make a two lane road seperated by a yellow dashed line
  fill("#202020");
  rect(0, 250, width, 400);
  fill("yellow");
  rect(0, 435, width, 10);
}




class Vehicle {
  constructor(x, y, w, h) {
    //properties related to position/display
    this.x = x; this.y = y; this.w = w; this.h = h;
    this.c = color(random(255), random(255), random(255));

    //properties related to movement
    this.xTime = random(10); this.yTime = random(10);
    this.timeShift = 0.01; this.maxSpeed = 5;


  }



  action(){
    this.move();
    this.speedUp();
    this.display();
    this.speedDown();
    this.changeColor();
  }







  //2 class methods
  display() {
    fill(this.c);
    rect(this.x, this.y, this.w, this.h);
    fill("LightYellow")
    if(this.y <409){
      rect(this.x + this.w - 7, this.y, 7, 10);
      rect(this.x + this.w - 7, this.y + this.h - 10, 7, 10);
    }
    if (this.y > 410) {
      rect(this.x + this.w - 40, this.y, 7,10);
      rect(this.x + this.w - 40, this.y + this.h - 10, 7, 10);
    }

  }




  move() {
    //movement for eastbound and westBound

    if (this.y < 400) {
      this.x += this.maxSpeed;
    }

    if (this.y > 410) {
      this.x -= this.maxSpeed;
    }


    //go back to the starting side
    if (this.x > windowWidth) this.x = -this.w;
    if (this.x + this.w < 0) this.x = windowWidth;




  }





  speedUp() {

    if (random(0, 100) < 1){
      this.maxSpeed += 1;
     
    }

    
    
  }

  speedDown(){
    if (random(0,100) < 1){
      while (this.maxSpeed >= 5)
      this.maxSpeed -= 1;
      
    }

  }

changeColor(){
  if (random(0, 100) < 1){
    this.c = color(random(255), random(255), random(255));
  }
}


}


