// Planets and Moons
// Mr. Scott
// Oct 17, 2025
// Objects within Objects
// Overwriting Objects, basic transform

// on-youe-own challenge. try to add;
//
//add some style to the planet/moons (color, trail effect)
//stars in the background -> create star class, use array
//multiple planets... which planets gets the moon
//or
//something cool you devise of your own


// Global Variables
let myPlanet;


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(70);
  myPlanet.display();

  for (let trail of Snowflake){
    trail.update()
  }
}

function mousePressed(){
  //regular click → add a moon
  //shift click → destroy and reset the moon
  if (keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(width/2, height/2);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if (keyCode !== SHIFT){
    myPlanet.x = mouseX;
    myPlanet.y = mouseY;
  }
}


class Planet{
  //constructor
  constructor(x,y){
    this.x = x;   this.y = y;  this.s = 100;
    this.moons = [];
  }

  //class methods

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
  }

  display(){
    //draw the planet + all of its moons
    circle(this.x, this.y, this.s);

    //for the moons
    for (let m of this.moons){
      m.update(this.x, this.y);
    }
  }
}

class Moon{
  constructor(){
    this.speed = random(1,5);
    this.angle = 0;  this.orbitRadius = random(80,250);
    this.s = random(5,50);
  }

  display(x,y){
    push();
    fill(random(100, 255), random(100, 255), random(100, 255));
    Snowflake();
    translate(x, y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }

  move(){
    this.angle += this.speed;
  }

  update(x,y){
    // helper function to handle calling the
    // class methods internally
    this.move();
    this.display(x,y);
  }


}

//I did not make...
class Snowflake {
  constructor() {
    this.posX = 0;
    this.posY = random(-height, 0);
    this.initialAngle = random(0, 360);
    this.size = random(2, 5);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(random(200, 256), random(200, 256), random(200, 256));
  }
}