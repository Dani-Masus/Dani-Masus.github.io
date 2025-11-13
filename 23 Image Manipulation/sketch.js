// Imag Manipulation 
// Mr. Scott
// Nov, 12. 2025
//working with images, translation b/w 2D and 1D indices

let pilot;

function setup() {
  loadAssets();
  createCanvas(891, 892);
  pixelDensity(1);  //safe-guard
}

async function loadAssets(){
  // pilot = await loadImage("assets/aviator.png");
  pilot = await createVideo("assets/bball.mp4");
  pilot.hide();
  pilot.loop();
}

let started = false;

function mousePressed(){
  started = true;
  resizeCanvas(pilot.width, pilot.height, false);
  pilot.loop();
}



function setPixelOneD(pos, r, g, b){
  //pos -> 1d
  // r,g,b -> new colors for that pixel
  pixels[pos] = r;
  pixels[pos + 1] = g;
  pixels[pos + 2] = b;
}

function setPixel(x, y, r, g, b){
  //x, y = pixel location
  //r,g,b = new pixel color
  let index = (width*y + x) * 4
  setPixelOneD(index, r, g, b)
}


function draw() {
  if(started){

  image(pilot, 0, 0);
  loadPixels(); //fills the "canvas" pixel array
  
  background(0);
  textImage();

  }
  else{
    text("Click To Start", width/2, height/2)
  }
}


function textImage(){
  //render an image using characters
  fill(255);
  let scaleAmount = 6;
  textSize(scaleAmount);
  for ( let x = 0; x < width; x+=scaleAmount){
    for (let y = 0; y < height; y+=scaleAmount){
      let avg = getAverage(x,y); //0-255
      if(avg > 200)   text("%", x, y);
      else if (avg > 180) text("-", x, y);
      else if (avg > 140) text("v", x, y)
      else if(avg > 100) text("=", x, y);
      else if(avg > 40) text(",", x, y);
    }
  }
}







function getAverage(x,y){
  //return the average intensity od pixel (x,y);
  let i = (width*y + x) * 4
  let r = pixels[i];
  let g = pixels[i+1];
  let b = pixels[i+2];
  return (r+g+b)/3

}



function greyscale(){
  // use the average value of each pixel to turn it grey
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAverage(x,y);
      setPixel(x, y, avg, avg, avg);
    }
  }
}



function boost(){
  //brightening filter
  let boost = map(mouseX, 0, width, -100, 100);
  for (let i = 0; i < pixels.length; i += 4){
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost;
    let b = pixels[i+2] + boost;
    setPixelOneD(i, r, g, b);
  }
}