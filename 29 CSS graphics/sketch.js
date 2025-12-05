// Project Title
// Your Name
// Date



function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(220);

  angle = map(mouseX, 0, width, -120, 120);
  
  orbitControl();
  lights();

  fill(100,255,100);
  for (let i = 0; i < 360; i+=45){
    push();
    rotateY(radians(i));
    drawBox(100);
    pop();
}
    
  }
  

let angle = 10;

function drawBox(size){
  if (size > 3){
    rotateZ(radians(angle));
    translate(size * 1.5, 0);
    box(size);

    drawBox(size * 0.8);
  }
}