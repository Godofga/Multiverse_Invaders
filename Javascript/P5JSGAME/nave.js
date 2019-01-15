var nave;
function Nave(){
    this.dimensions= windowWidth/15;
    this.x= (windowWidth-20)/2;
    this.y=windowHeight-20-4;
    this.velocidade=6;
    this.color=[255,255,255];
    this.render= function(){
      fill(this.color);
      noStroke();
      rect(this.x,this.y,this.dimensions,this.dimensions);
    };
    this.walk= function (direita)
    {
      ((this.x-this.velocidade)<=0)&&!direita?this.x=0:(this.x+this.dimensions/2+this.velocidade)>=windowWidth-this.dimensions/2&&direita?this.x=windowWidth-this.dimensions:this.x+=direita?this.velocidade:-this.velocidade;

    };
    this.start= function (){
      this.x= (windowWidth-this.dimensions)/2;
      this.y=windowHeight-this.dimensions-4;
      this.velocidade=windowWidth/120;
    };

}
