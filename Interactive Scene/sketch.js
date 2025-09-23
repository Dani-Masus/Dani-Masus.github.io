// Interactive Scene. Gurama
// Kingston
// sept. 16, 2025





function setup() {
  createCanvas(windowWidth, windowHeight);

  
}

function draw() {
  background(220);

  scene();
}




function scene(){
  //Only background - Start
  fill("Yellow");
  stroke("Yellow")
  circle(50,250,150);// Sun

  
  fill("LightGoldenRodYellow ");
  stroke("LightGoldenRodYellow");
  triangle(200, 405, 318, 30, 506, 405);// Mountains - shine
  triangle(300, 705, 508, 200, 806, 705);
  triangle(400, 850, 680, 300, 960,850);
  triangle(100, 405, 208, 50, 406, 505);

  fill("LightCyan");
  stroke("LightCyan");

  triangle(400, 1200, 680, 300, 960,850);// mountains - Dark
  triangle(300, 905, 508, 200, 806, 705);
  triangle(200, 655, 318, 30, 516, 405);
  triangle(150, 405, 208, 50, 406, 505);


  fill("DarkGreen ");
  stroke("DarkGreen");
  
  //ellipse(700,600,600,500);// Land

  rect(450,450,200,200);
  rect(600,400,200,200);


 //fill("YellowGreen ");



  ellipse(200,600,700,500);

  fill("DarkGreen");
  


  ellipse(400,750,1500,500);

  fill("");
  stroke("");

  //ellipse(700,440,300, 50);
}

function protag(){

  circle(200,200,30);
}