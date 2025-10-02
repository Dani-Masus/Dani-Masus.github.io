// Image Animations
// Mr. Scott
// oct, 2. 2025

let pinImages = [];//array === lists
let current = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  print("done loading");
}

function draw() {
  background(0);
  //aniWithFour();

  circle(mouseX, mouseY, 50);

  //manage current image display
  if(frameCount % 40 === 0){
  current += 1;
  if(current > 8) current = 0;
  }
  image(pinImages[current], width/2, height*0.6)

  //Screen is updated here
}

function aniWithFour(){
  //try to make an animation with a FOR loop
  imageMode(CENTER);
  for(i = 0; i < 9; i++){
    image(pinImages[i], width/2, height*0.7);
  }
}

async function loadAssets(){
  //load all our pinwheel images
  for(let i = 0; i < 9; i++){
  pinImages.push(await loadImage("image folder/pin-0"+i+".png"));
  }
}