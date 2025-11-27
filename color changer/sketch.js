// Five-Color Posterize
// Kingston
// Nov 14. 2025

let picture;

async function setup() {
  createCanvas(600, 600);
  picture = await loadImage("assets/nuit.jpg");
  pixelDensity(1);
  
}

function draw() {
  //background(220);

  image(picture, 0, 0);
  loadPixels();

  posterize();

  updatePixels();

}

function averageIntensity(x, y){
  let i = (width * y + x) * 4
  let r = pixels[i];
  let g = pixels[i + 1];
  let b = pixels[i + 2];
  return (r + g + b) / 3
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
  let index = (width*y + x) * 4;
  setPixelOneD(index, r, g, b);
}

function posterize(){
  // use the average value of each pixel to turn it grey
  for (let x = 0; x < width; x++){
    for (let y = 0; y < height; y++){
      let avg = getAverage(x,y);
      setPixel(x, y, avg, avg, avg);

      if (avg > 205)  setPixel(pixels.length, 170, 230, 220);
      1
      
      
    }
  }
}