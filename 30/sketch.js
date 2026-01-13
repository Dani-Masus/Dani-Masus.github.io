// Final Coding Review

// --- globals variables ---
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

// (Gorilla Related)
let idleIndex = 0;  let swipeIndex = 0;
let gorillaState = 0; //0-idle  1-swipe
let gorillaX = 200;

// (Spiral Related)
let spiralObjects = [];


async function setup() {
  createCanvas(windowWidth, windowHeight);
  await loadAssets();
}

async function loadAssets(){
  //Circles First
  for(let i=0; i<=15; i++){
    if(i < 10){
      spiralImages.push(loadImage("assets/Circle/circle0"+i+".png"));
    }
    else{
      spiralImages.push(loadImage("assets/Circle/circle"+i+".png"));
    }
  }

  //Gorillas Next
  for(let i = 1; i<=6; i++){
    gorillaIdle.push(loadImage("assets/Gorilla/idle"+i+".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe"+i+".png"));
  }

}

function drawGorilla(){
  //render the gorilla at its position, choosing
  //the correct image for animation playback
  if(gorillaState === 0){ //Idle State (0,1,2,3,4,5)
    image(gorillaIdle[idleIndex], gorillaX, height/2);
    if(frameCount % 7 === 0) {
      idleIndex++;
      if( idleIndex > 5) idleIndex = 0;
    }
    
  }

  else if(gorillaState === 1){ //Swipe State
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);
    if(frameCount % 4 === 0){
      swipeIndex++;
      if( swipeIndex > 5) swipeIndex = 0;
    }
  }
}

function keyPressed(){
  //trigger automatically
  //once per keypress even
  if(key === " "){
    if(gorillaState === 0) gorillaState = 1;
    else gorillaState = 0
  }
}

function moveGorilla(){
  //checking for keypress ONCE PER FRAME
  //is better for a continous detection...
  if(keyIsDown(77)){
    if(mouseX < gorillaX) gorillaX -= 5;
    else gorillaState += 5;
  }
}


function mousedPressed(){
  //triggers automatically, once per clicked event
  spiralObjects.push(new Spiral(mouseX, mouseY));
  //dont try to draw anything there
}



function draw() {
  imageMode(CENTER);
  background(0);
  moveGorilla();
  drawGorilla();
  spiralObjects.push(new Spiral(mouseX, mouseY));
  //spiral things
  for(let i = 0; i < spiralObjects,length; i++){
    let s = spiralObjects[i];
    s.display();
    if (s === false){
      spiralObjects.splice(i,1);
    }
  }

 
}

 //spiral things
  class Spiral{  //runs once, each time an object is made
    constructor(x,y){
      this.x = x; this.y = y;
      this.currentFrame = 0
      this.active = true //to mark for removal

    }
    //class methods
    display(){
      if(this.currentFrame > 15){
        this.active = false;
      }
      else{
        image(spiralImages[this.currentFrame], this.x, this.y)
        if (frameCount % 3 === 0) this.currentFrame++
      }
    }
  }