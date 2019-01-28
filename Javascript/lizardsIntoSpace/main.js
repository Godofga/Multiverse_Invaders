var survivors = [];
var items = [];
function setup(){
  createCanvas(windowWidth,windowHeight-5);
  survivors.push(new creature());
  for(let i=0;i<30;i++)
  {
    items.push(new item());
  }

}
function draw(){
  background(35);
  random(1)<0.01?items.push(new item()): 1;
  for(let i=0;i<survivors.length;i++){
      survivors[i].render();
  }

  for(let i=0; i < items.length;i++){
      for(let j=0; j< items.length;j++){
        if(items[i]!=items[j]&&(dist(items[i].x,items[i].y,items[i].x,items[j].y)<items[i].size*2))
          items[i].collide(items[j]);
        }
      items[i].render();
      noFill();
      ellipse(items[i].x,items[i].y,items[i].size*2,items[i].size*2)
  }

  // if(dist(this.x,this.y,another.x,another.y)<this.size*this.size/2)
  // {
}
