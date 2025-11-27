// Pure Primaries - excersize sample
// Kingston
// Nov 13. 2025


let compChip;


async function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  compChip = await loadImage("assets/chip.jpg");
}


//For each pixel remove the red compoment (set to 0)
//               halve the blue component
// R G B A R G B A

function colorEffect(){
  for (let i = 0; i < pixels.length; i+=4){
    pixels[i] = pixels[i] + 150;  //R
    pixels[i+2] = pixels[i+2] * 35; //B
    
  }
}




function draw() {
  background(220);
  image(compChip, 0, 0);
  loadPixels(); //populate the pixels array

  colorEffect();//repalce w/ each different excersize


  updatePixels();//redraw based on our changes
}



