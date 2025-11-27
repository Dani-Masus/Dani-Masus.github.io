// Working with Vectors
// Mr. Scott
// Nov 21. 2025

let objects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
}




function draw() {
  background(220);

  if (mouseIsPressed){
    objects.push(new Ball(mouseX, mouseY));

    
  }
  
  for (let o of objects){
    if (keyIsDown(32)){
      o.move();
    }
      //o.clacMouse();
      o.display();
    }
}







class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-5, 5), -5);
    this.grav = createVector(0, 0.2); //Mouse attractor
  }

  clacMouse(){
    //mouse vector 'attractor' calculation
    this.grav = createVector(mouseX, mouseY);
    this.grav.sub(this.pos);
    this.grav.normalize(); //set 0-1
    this.grav.mult(4);

    
  }
  move(){
    this.vel.add(this.grav);
    this.vel.limit(200); //can't go outside -20 and 20
    this.pos.add(this.vel);

    //wall-floor bounce
    if(this.pos.x < 0 || this.pos.x > width){
      this.vel.x *= -1;
    }

    //floor bounce
    if(this.pos.y > height){
      this.vel.y *= -1.22;
    }

  }

  display(){
    //display ball
    //circle(this.pos.x, this.pos.y, 20);

    //display vectors
    if(true){
      stroke(random(0,255),random(0, 255),random(0, 255));
      line(500, 500, this.pos.x, this.pos.y);
      

      let endX = this.pos.x + this.vel.x;
      let endY = this.pos.y + this.vel.y;

      stroke(0, 0, 255);
      line(endX, endY, endX + this.grav.x, endY + this.grav.y);
     }

   }

  }