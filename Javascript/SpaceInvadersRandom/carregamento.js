function Barra()
{
    this.x=0;
    this.y=windowWidth/100;
    this.render= function(balas,win)
    {
      if(win)
      {
        fill(66/(balas+1)-11);
      }
      else {
        fill(200+11*balas);
      }
      noStroke();
      rect(this.x,this.y,windowWidth*balas/5,windowWidth/30-windowWidth/50);
    }
}
