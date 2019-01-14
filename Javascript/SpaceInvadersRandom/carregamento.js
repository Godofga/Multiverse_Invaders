function Barra()
{
    this.x=0;
    this.y=windowWidth/100;
    this.render= function(balas)
    {
      fill(200+11*balas);
      noStroke();
      rect(this.x,this.y,windowWidth*balas/5,windowWidth/30-windowWidth/50);
    }
}
