var itemTypes = [["Food",[255,255,0],[255,200,50]],["poisonedFood", [255,255,0], [100,0,200]],["Water",[0,150,255],[0,100,255]] , ["PoisonedWater",[0,150,255],[100,0,200]], ["HealthPotion",[255,50,50],[255,  0,0]] ,["Poison", [200,0,100],[100,0,200]]];


function item(){
  this.type= round(random(itemTypes.length-1));
  this.size = windowWidth/300;
  this.color = itemTypes[this.type][1];
  this.atribute= itemTypes[this.type][2];
  this.x = random(1)>0.5?random(0,windowWidth): random(1)>0.5?random(-100,-this.size): random(windowWidth+this.size,windowWidth+this.size+100);
  this.y = (this.x < - this.size||this.x>windowWidth+this.size) ? random(-windowHeight/10,windowHeight*1.1): (random(1) > 0.5 ? random(0-this.size,-100):random(windowHeight,windowHeight+this.size+100));
  this.xv = random(-1,1);//this.x < 0 ? random(0.1,2) : random(-0.1,-2);
  this.yv = random(-1,1);;//this.y < 0 ? random(0.1,2) : random(-0.1,-2);
  this.repulsion = windowWidth / 150000;

  this.render = function (){
    if(this.x>windowWidth*0.9){
      this.xv-= this.repulsion;
    }
    else if(this.x<windowWidth*0.1){
      this.xv+= this.repulsion;
    }
    if(this.y>windowHeight*0.9){
      this.yv-= this.repulsion;
    }
    else if(this.y<windowHeight*0.1){
      this.yv+= this.repulsion;
    }
    this.x+=this.xv;
    this.y+=this.yv;
    stroke(this.atribute);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.x,this.y,this.size,this.size);
    text(itemTypes[this.type][0],this.x,this.y)
  }

  this.collide = function (another){
      this.xv += (this.x - another.x)/ 100000;
      this.yv += (this.y - another.y)/ 100000;
  }


}
