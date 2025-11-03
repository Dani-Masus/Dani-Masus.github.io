// 2d array basics
// Mr. Scott
// Nov, 3. 2025

//0 (Black)     255 (White)

let grid = [
  [0, 255, 0, 255, 0,],
  [255, 255, 0, 255, 255],
  [0, 0, 0, 0, 0 ],
  [255, 0, 255, 0, 255]
];

let rows = grid.length;
let cols = grid[0].length;

let squareSize = 60;


function setup() {
  createCanvas(cols*squareSize, rows*squareSize);

}

function draw() {
  background(220);
  renderGrid();
  print(getCurrentX(), getCurrentY());
}


function mousePressed(){
  //flip the current tile
  //upgrade: only do this if the mouse is canvas
  let x = getCurrentX();
  let y = getCurrentY();

  //ALWAYS: flip the "focused" tile
  flip(x,y);
}


function getCurrentX(){
  //determine current col of mouse position
  let constrainedX = constrain(mouseX, 0, width-1);
  return floor(constrainedX / squareSize);
}

function getCurrentY(){
  //determine current col of mouse position
  let constrainedY = constrain(mouseY, 0, height-1);
  return floor(constrainedY / squareSize);
}


function flip(x, y){
  //takes a title @ x,y and inverts its value
  if(grid[y][x] === 0) grid [y][x] = 255;
  else grid[y][x] = 0;
}




function renderGrid(){
  //interpret the information in the 2d array, and draw
  //a grid of a sqaure on the screen to reflect it.
  for (let y = 0; y < rows; y++){
    for (let x = 0; x < cols; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      square(x*squareSize, y*squareSize, squareSize);
    }
  }
}