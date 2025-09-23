// drawing with loops
// mr. Scott
// 9/23/2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  gradiantBackground(220);
  circleLine(height *0.35, 30);
  circleLine(height/2, 50);
  circleLine(height * 0.65, 80);
}

function gradiantBackground(){
  //create a gradiant to use as a background
  let h = 3; // height of eact rectangle

  //use a loop (doesn't have to be WHILE) to
  //draw a verticle stack of rectangles
  let y = 0;
    while (y <= height)
    noStroke();
    let mappedY = map(y,0,height,0,255);
    fill(mappedY, mappedY, 0);
    let flippedY = 255 - mappedY;
    let mappedMouseX = map(mouseX, 0, width, 0, 255);
    let mappedMouseY = map(mouseY, 0, height, 0, 255);
    rect(0,y, width, h)
    y += h;
}

function cDistance(x1, y1, x2, y2){
  //calculate the strightline distance.
  //between (x1, y1) and (x2, y2)
  let a = abs(x1 - y1);
  let b = abs(y1 - y2); //c =
  let c = sqrt(pow(a,2) + pow(b,2));
  return c.toFixed(1); //Keep only one decimal point
}

function circleLine(y, size){
  //use function to make a line of circles with (loop)
  // y ->number the height of which to draw the line
  //  size -> number  diameter of the circles

  let xStart = width * 0.1;  //10% position from the left
  let xEnd = width * 0.9  // 90% horizontal position from left

  for(let x = xStart ; x <= xEnd ; x += size){
    let d = cDistance(x,y,mouseX, mouseY);
    if (d <= size/2){
      fill(200,200,0);
    }
    else fill(255);
    circle(x, y, size);
    
    textAlign(CENTER, CENTER);
    text(d, x, y)
  }
}