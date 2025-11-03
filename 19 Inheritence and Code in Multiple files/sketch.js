// Inheritence and Code in Multiple Files
// Mr. Scott
// Oct, 30. 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 150; i++){
    objects.push(new animatedObject(random(width), random(height)));
    objects.push(new circleObject(random(width), random(height)));
    objects.push(new lineObject());
  }

}

function draw() {
  background(220);
  for (let o of objects){
    o.move();
    o.display();
  }
}





//Child class 01 - circle
class circleObject extends animatedObject{
  constructor(x,y){
    super(x,y);
    //we can also add on to what was in the parent class
    this.size = random(20,40);
    

  }

  //no mention of move()... it will bw same as parent's move()
  display(){  //function override; copies of parents variables
    if(dist(this.x, this.y, mouseX, mouseY) < this.size/2){
      fill(0,255,0);
    }
    else fill(255);

    circle(this.x, this.y, this.size);
  }

  


}


//child class 02 - Line
class lineObject extends animatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){ //combo override, but built on parent version
    super.move(); //runs parent version move()
    this.x -= 5;
    if(this.x < 0) this.x = width;

  }

display(){  //full override (no refference to the parent version)
  if(mouseIsPressed){
    strokeWeight(12);
  }
  else strokeWeight(2);

  line(this.x,this.y,this.x + 15, this.y);

}

}