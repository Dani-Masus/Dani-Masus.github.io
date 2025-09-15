// user event + day one challenge
// Mr.Scott
// sept 11, 2025

//Global variables here...
//Can only work with simple data in this
//section of code. No system varibles are
//available until in setup(), ...after canvas is made

let circleColor = false;
let currentColor = "white";

let x;   let y = 300;

let tSize = 50; //for text-font size

//  declaration   initialization

function setup() {
  createCanvas(400,400);
  x = width/2;
}

function draw() {
  background(220);
  challenge(); //coordinate system challenge
  rectMode(CENTER);
  movement();
  rect(x,y,60,30);
  mouseReport();

}

function mouseReport(){
  //inspect some of the built-ins (system variables)
  // for workin with a mouse
  fill(0);
  let src = mouseX + ", " + mouseY + ", " + mouseIsPressed + mouseIsPressed + ", " + mouseButton;
  textSize(tSize);
  text(src, mouseX, mouseY);

  if(mouseIsPressed){
    
  }

}

function mousePressed(){
  tSize = random(10, 80);
}












function movement(){
  //check for keyboard pressed each frame
  //and move rects accordingly

  //if (keyCode === RIGHT_ARROW && keyIsPressed) x += 5;
  //else if (keyCode === LEFT_ARROW && keyIsPressed) x -= 5;

  if (keyIsDown(UP_ARROW)) y -= 5;
  if (keyIsDown(DOWN_ARROW)) y += 5;
  if (keyIsDown(LEFT_ARROW)) x -= 5;
  if (keyIsDown(RIGHT_ARROW)) x += 5;

}





function keyPressed(){
  //this is a special event function
  //automatically called anytime a keyboard
  //button is pressed

  //if(keyCode === LEFT_ARROW) x = x - 10;

  print("key was pressed");
  if(key === "g") currentColor = "green";
  else if (keyCode === CONTROL) currentColor = "blue";

  circleColor = !circleColor;

  //How to tell WHICH key was pressed??
}

function challenge(){
  //draw 5 hollow circles, in 4 corners
  //and center position
  noFill();

  if(circleColor){ //circleColor === true
    fill(currentColor);  
  }
  //5 circles
  circle(0,0,50); //WRONG

  circle(400,0,50);

  circle(0,400,50);

  circle(400,400,50);

  circle(200,200,50);
}