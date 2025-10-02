// Terrain Generation Project
// Mr. SCott
// Sept 29, 2025

let rectWidth = 2;




function setup() {
  createCanvas(windowWidth, windowHeight);

  //for now, generate the terrain once

  generateTerrain();

}




function generateTerrain(){
  // Use a loop to generate and draw several
  // rectangles side to side to look like 2D 
  // terrain.

  rectMode(CORNERS);

  for(let x = 0; x < width; x+=rectWidth){

    // generate a random height.
    // NOTE!! change this from random() to noise()

    let rectHeight = noise(x, y, z);

    // calculate the upper-right corner of rect

    let x2 = x + rectWidth;
    let y2 = height - rectHeight;

    rect(x, height, x2, y2);

  }

  rectMode(CORNER);  //revert to default
}

noise


function draw() {
  // don't need to use draw UNTIL
  // animating the terrain (panning)

  // background(220);

  noiseTerrian();
} 





function noiseTerrian(){
  //noise level and scale
  let noiseLevel = 100;
  let noiseScale = 0.02

  //scale the input coords
  let n = frameCount;
  let nx = noiseScale * x;

  //compute the noise value.
  let y = noiseLevel * noise (nx);

  //draw line
  line(x, 0, x, y);
}
