// working with images
// mr.Scott
// 9/25/25

let lionL, lionR;
let facingRight = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loadAssets();
  imageMode(CENTER);
  noCurser();
}

async function loadAssets(){
  //handle loading all the images
  lionL = await loadImage("pics/lion-left.png");
  lionR = await loadImage("pics/lion-right.png");
}
function draw() {
  background(220);
  //update our direction
  if(pmouseX < mouseX){
    facingRight = true;
  }
  else if(pmouseX > mouseX){
    facingRight = false;
  }

  //update our drawing
  if(facingRight){
    image(lionR, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
  else{
  image(lionL, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
}

