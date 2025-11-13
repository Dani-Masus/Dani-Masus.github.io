// Pure Primaries
// Kingston
// Nov 13. 2025


let chip;


function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
}


async function loadAssets() {
  chip = await loadImage("assets/chip.jpg");
}



function draw() {
  background(220);
  image(chip, 0, 0);
}

function getAverage(){
  
}
