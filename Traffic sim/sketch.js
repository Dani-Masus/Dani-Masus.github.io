// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//global variables
let car;
let eastBound=[];



function setup() {
  createCanvas(windowWidth, windowHeight);
  car = new Vehicle(0, random(250, 400), 80, 35);

//do this 20x
  eastBound.push(new Vehicle(0, random(250, 400), 80, 35));

  //multi cars
  //  for (let c of this.topBound){
  //    c.move();
  //    c.display();
  //  }


  
}



function draw() {
  background(220);
  drawRoad();
  //loop through eastbound
  //   current.display()
   //         .move()


  //cars on the top
  car.move();
  car.display();




}











function drawRoad(){
  //make a two lane road seperated by a yellow dashed line
  fill("#202020");
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
    fill("LightYellow")
    rect(this.x + this.w - 7, this.y, 7, 10);
    rect(this.x + this.w - 7, this.y + this.h - 10, 7, 10);
   

    
  }




  move(){
    this.x += this.maxSpeed;

    //go back to the starting side
    if(this.x > windowWidth) this.x = -this.w;
    if (this.x + this.w < 0) this.x = windowWidth;

    

      
    
  }





  speedUp(){
    
  }
  
}


