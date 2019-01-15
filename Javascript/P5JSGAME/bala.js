var bullets=[];
function Bala(x,y,cor)
{
  this.x=x;
  this.y=y;
  this.a=windowWidth/30;
  this.l=windowWidth/100;
  this.velocidade=random(windowHeight/150,windowHeight/200);
  this.angulo=random(-0.06,0.06);
  this.cor= cor;//[100,0,200,200];

  this.start= function()
  {
    this.l=round(random(windowWidth/150,windowWidth/110));
    this.a=round(random(windowWidth/35,windowWidth/65));
    this.y-=this.a;
    this.x-=this.l/2;

  };
  this.render= function()
  {
    fill(this.cor);
    noStroke();
    this.x+=Math.sin(this.angulo)*this.velocidade;
    this.y-=Math.cos(this.angulo)*this.velocidade;
    rect(this.x,this.y,this.l,this.a);
  };
}
