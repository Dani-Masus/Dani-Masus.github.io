// nested loops and popping bubbles
// mr. Scott
// oct 3rd. 2025

let bubbles = [];
let bubbleSize = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  populateArray();
}


function populateArray(){
  //use a nested loop to generate x,y positions for
  //all the bubbles 
  for(let x = 0; x < width; x += bubbleSize){
  
    for(let y = 0; y < height; y += bubbleSize){
      let b = {
        x: x, y: y
      };
      bubbles.push(b);
    }
  }
}

function showBubbles(){
  //traverse the array, and display the bubble
  //at each (x,y)
  for(i = 0; i < bubbles.length; i++){
    let b = bubbles[i];
    circle(b.x, b.y, bubbleSize);

    //point in circle distance check (pop):
    if(dist(b.x, b.y, mouseX, mouseY) < bubbleSize/2){
      //to delete an item:  use .splice()
      //  .splice(pos, #ofItemsToDel, [replaceItems]);
      bubbles.splice(i, 1);
     
    }
  }
}



function draw() {
 background(220);
 showBubbles();
}















// function drawWithGrid(){
//   for(let x = 0; x <= width; x+= 30){
//     //x:  0,  30, 60
//     for(let y = 0; y <= height; y += 30){
//       //y : 0,  30, 60
//       circle(x,y,20);
//     }
//   }
// }