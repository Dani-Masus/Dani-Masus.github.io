// state variable and rela time
// Datemr. Scott
//sept 18, 2025


//Global variables
let shapeState = 0; // 0 - circle   1 -   2 - triangle   3 - transition
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = milis();
}

function draw() {
  background(220);
  drawShape();
 // print("frame: " + frameCount);
}


function manageTimer(){
  //update elapsetime and display

  if(shapeState === 3 && elapsedTime)
}

function keyPressed(){

  //auto called on amy keyboard button pressed
  //state var; 0 -> 1  1 -> 2
  //                  2 -> 3 (for 2 seconds) -> 0
  if (shapeState < 3){
    shapeState++; 
    if (shapeState===3){
      startTime - millis();
    }
  }


}

function drawShape(){
  //inspect our state variable, and draw 1 of 4 possibilities
  //options, depending on the current value
  switch(shapeState){
    case 0:
      circle(width/2, height/2,150);
      break;
    case 1:
      square(width/2, height/2, 150);
      break;
    case 2:
      let x = width/2;     let y = height/2;
      triangle(x-50, y+50, x+50, y+50, x, y-25);
      break;
    case 3:
      for(let i = 0; i <20; i++){
        let x = random(width*0.04, width*0.06);
        let y = random(height*0.4, height*0.6);
        let x, y, x+25, y
      }
  }
}