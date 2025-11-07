// Block pusher starter
// Mr. Scott
// Nov 7. 2025

tiles = [];   //0 = grass   1 = chicken   2 = cow   3 = star
let level = [
  [0, 0, 1, 3, 0],
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0]
]

let playerX = 3; let playerY = 4;
let rows = level.length;
let cols = level[0].length;
let tile_size = 100;



function setup() {
  createCanvas(tile_size*cols, tile_size*rows);
  loadAssets();
  level[playerY][playerX] = 2;
  keyPressed();
}

async function loadAssets(){
  //load our four (or more) tile images
  for(let i = 0; i < 4; i++){
    tiles.push(await loadImage("assets/" +i+ ".png"))
  }
}
  

function draw() {
  background(220);
  renderBoard();
}


function  swap(x1, y1, x2, y2){
//modift gameboard: switch 2 tiles
let temp = level[y1][x1];
level[y1][x1] = [y2][x2];
level[y2][x2] = temp;
}

function keyPressed(){
  //enact single action per key
  if(keyCode === LEFT_ARROW){
    if (playerX > 0){
      if (level[playerY][playerX - 1] === 0){
        swap(playerX, playerY, playerX - 1, playerY);
        playerX --;
      }
      else if(level[playerY][playerX - 1] === 1){
        //chicken check to see there is room to be pushed 
        //check to see if thwere is grass beyond the chicken
        if(playerX > 1 && level[playerY][playerX - 2] === 0){
          //swap grass and the chicken
          //swap the grass and the cow
          swap(playerX - 1, playerY, playerX - 2, playerY);
          swap(playerX, playerY, playerX - 1, playerY);
          playerX--;
        }
      }
    }
  }


  if(keyCode === RIGHT_ARROW){
    swap(playerX, playerY, playerX + 1, playerY );
    playerX++;

  } 

  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++;

    
  }

  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;

    
  }

  
}



function renderBoard(){
  //interpret the data in our 2D array, place
  //images into the canvas
  for(let x = 0; x < cols; x++){
    for (let y = 0; y < rows; y++){
      let index = level[y][x];
      let currentImage = tiles[index];
      image(currentImage, x*tile_size, y*tile_size);
    }
  }
}