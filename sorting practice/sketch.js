





let values = [];
const ARRAY_SIZE = 20;

function setup() {
  noCanvas();
  print(values); //unsorted
  selectionSort();  print(values);
  bubbleSort(); print(values);
  }

function bubbleSort(){
  for(let i = 0; i < values.length; i++){
    
  }
}


function selectionSort(){
  //for each index, find the smallest remaining values on right
  //and swap if it is smaller than the item on the index.
  for(let i = 0; i < values.length - 1; i++){
    let minimum = values[1];
    let minimumIndex = i;
    for(let search = i+1; search<values.length; search++){
      let cur = values[search];
      if(cur < minimum){
        minimum = cur;
        minimumIndex = search;
      }
    }
    let temp = values[1];
    values[1] = values[minimumIndex];
    values[minimumIndex] = temp;
  }
}

function populateArray(){
  for(let i = 0; i < ARRAY_SIZE; i++){
    values.push(floor(random(1000))); //0-999
  }
}




//function draw() {
 // background(220);
//}
