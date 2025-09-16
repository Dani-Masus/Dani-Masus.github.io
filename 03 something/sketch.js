// mutiple keys and outlines
// Mr. Scott
// sept 15

// keyIsDown (keyCode)


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  checkMulti();
}

function checkMulti(){

  //check for multiple key presses (3 simultanious)
  let a = keyIsDown(65); // 65 = "a"
  let b = keyIsDown(66); // 66 = "b"
  let c = keyIsDown(67); // 67 = "c"
  text("a:" + a + "\tb:" + b + "\tc:" + c, 100, 300);
}