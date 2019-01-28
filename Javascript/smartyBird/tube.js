
class tube {

    //Creation
    constructor () {
      this.topy = round(random(canvas.height/4,canvas.height*3/4));
      this.boty = this.topy + 150;
      this.x = canvas.width;
      this.color=0;
    }

    //Rendering

    show (){

      fill(this.color);
      rect(this.x,0,tubeW,this.topy);
      rect(this.x,this.boty,tubeW,canvas.height-this.boty);

    }

    move (){

      this.x-=vx;

    }

}
