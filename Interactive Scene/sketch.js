// Interactive Scene. Gurama
// Kingston
// sept. 16, 2025





function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);
  fill("Yellow");
  stroke("Yellow");
  circle(mouseX, mouseY, 100); // the sun

  
  //Stroke("LightGoldenRodYellow");

  LightLeft();

  noStroke();
  noFill();
  
  lightWorld();

  
}








function protag(){
  fill("Black");

  //circle(50,250,10);
}



function lightRight(){
  //Only sune === protag
  fill("LightGoldenRodYellow ");
  stroke("LightGoldenRodYellow");
  triangle(200, 405, 318, 30, 506, 405);// Mountains - shine right
  triangle(300, 705, 508, 200, 806, 705);
  triangle(400, 850, 680, 300, 960,850);
  triangle(100, 405, 208, 50, 406, 505);
}

function LightLeft(){
  strokeWeight(10);
  fill("Yellow");
  line(125, 500, 210, 40);

}



function lightWorld(){
  //Only background - Start
  

  fill("LightCyan");
  stroke("LightCyan");

  triangle(400, 1200, 680, 300, 960,850);// mountains - Dark
  triangle(300, 905, 508, 200, 806, 705);
  triangle(200, 655, 318, 30, 516, 405);
  triangle(150, 405, 208, 50, 406, 505);


  fill("Green");
  noStroke();

  
  // Land

  fill("ForestGreen");

  rect(450,480,200,200);
  rect(300,450,200,200);
  rect(0,400,300,500);

  fill("ForestGreen");
  
  rect(450,580,200,200);
  rect(300,550,200,200);
  rect(0,500,300,500);
  rect(650,520,500,500);

  fill("DarkGreen");
  noStroke();
  
  rect(450,680,200,200);
  rect(300,650,200,200);
  rect(0,560,300,500);
  rect(650,720,500,500);


  fill("DarkGreen");
  noStroke();
  
  rect(450,780,200,200);
  rect(300,750,200,200);
  rect(0,660,300,500);

  
  //Land shine from the sun
  fill("LightGoldenRodYellow");
  stroke("LightGoldenRodYellow");
  rect(0,400,150,20);
}