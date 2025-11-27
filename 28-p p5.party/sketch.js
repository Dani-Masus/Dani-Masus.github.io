// P5 party

let shared = {painting: [], invert: false};

const colors = [
  "#ee443",
  "#eeee3",
  "#eee43",
  "#ee34e",
  "#e3443",
  "#ee243",
  "#e4343",
];

function pickColor(){
  return random(colors);
}


function mousedPressed(){
  shared.painting.push([mouseX, mouseY, c]);
  c = pickColor();
}


function preload(){
  partyConnect( "wss://demoserver.p5party.org", "cs30party");
  shared = partyLoadShared("shared", shared);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  c = pickColor();
}

function renderPaint(){
  for(let p of shared.painting){
    fill(p[2]);
    circle(p[0], p[1], 30);
  }
}



function draw() {
  background(220);
  renderPaint();
}

