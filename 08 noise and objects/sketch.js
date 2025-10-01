// noise and objects
// mr.Scott
// sept, 26 2025


let ball;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = {  //object notation. inside the bracket
            //set up a bunch of property value  pairs
    x: 300, y: 400, size: 20,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.02
    
  };

  ball2 = {
    x: 200, y:200,  size:122,
    c: color(random(255),random(255),random(255)),
    timeX: random(100), timeY: random(100),
    timeOff: 0.12
  };

  ball3 = {
    x: 200, y:200,  size:55,
    c: color(random(255),random(255),random(255)),
    timeX: random(150), timeY: random(200),
    timeOff: 0.44
  };

  ball4 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.01
  };
  ball5 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball6 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball7 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball8 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball9 = {
    x: 0, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball10 = {
    x: 310, y:270,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball11 = {
    x: 300, y:120,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball12 = {
    x: 100, y:260,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
  ball13 = {
    x: 200, y:200,  size:32,
    c: color(random(255),random(255),random(255)),
    timeX: random(50), timeY: random(120),
    timeOff: 0.44
  };
}




function draw() {
  //TRICK#1 //background(220);
  //TRICK#2 -> clear background with semi-transparent box
  fill(255,70); //0-255 opacity; 4%
  rect(0,0, width, height);
  moveBall(ball);
  moveBall(ball2);
  moveBall(ball3);
  moveBall(ball4);
  moveBall(ball5);
  moveBall(ball6);
  moveBall(ball7);
  moveBall(ball8);
  moveBall(ball9);
  moveBall(ball10);
  moveBall(ball11);
  moveBall(ball12);
  moveBall(ball13);
}

function moveBall(b){
  //b -> Ball type object
  //update position and draw provided ball

  //generate random position change (x, y)
  let dx = noise(b.timeX); //0-1
  dx = map (dx, 0, 1, -5, 5);
  let dy = noise(b.timeY);
  dy = map(dy, 0, 1, -5, 5);

  //advance our noise graph "cursers"
  b.timeX += b.timeOff; b.timeY += b.timeOff;

  b.x += dx;  b.y += dy;

  //handle any wraparounds nesscessary
  if(b.x < 0) b.x += width;
  else if(b.x > width) b.x -= width;

  if(b.y < 0) b.y += height;
  else if (b.y > height) b.y -= height;

  //render the circle
  fill(b.c);
  circle(b.x, b.y, b.size);
}