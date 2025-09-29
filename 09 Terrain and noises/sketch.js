// starter code for
// Terrain generation projects
// Mr. Scott
// sept 29, 2025

const { Noise } = require("../../../../../.vscode/extensions/wmcicompsci.cs30-p5-1.9.3/p5types");


let rectWidth = 3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //for now generate the terrain once
  generateTerrain();
}


function generateTerrain(){
  //use a loop to generate and draw several
  //rectanges side to side to look like 2D terrain
  rectMode(CORNERS);

  for(let x = 0; x < width; x+=rectWidth){
    //Generate random height
  //NOTE!! change from random() to Noise()
  let rectHeight = random(50, 500);

  // calculate the upper-right coner of rect
  let x2 = x+rectWidth;
  let y2 = height - rectHeight;
  print(x+" "+ height+" "+  x2+" "+  y2);
  rect(x, height, x2, y2);

}


  rectMode(CORNER); //revert to default
}




function draw() {
  // dont need to use draw until
  //animating the terrain

  //background(220);

}


