//Parent class ("SUPER CLASS")
// --- if all in one file, should occur first ---
class animatedObject{
    constructor(x,y,){
      this.x = x; this.y = y;
      this.size = 6;
    }
  
    move(){  //add a a "wiggle effect"
      this.x += random(-10,10);
      this.y += random(-2,2);  
    }
  
    display(){
      strokeWeight(this.size);
      point(this.x, this.y);
  
    }


}