var inimigos=[];
function Inimigo(x2,y1,y2,velocidade)
{
  this.x1=x2-windowWidth/60;
  this.y1=y1;
  this.x2=x2;
  this.y2=y2;
  this.x3=x2+windowWidth/60;
  this.y3=y1;
  this.h=windowWidth/15;
  this.velocidade= velocidade;
  this.cor=/*round(random(60,220));*/[round(random(50,200)),round(random(0,100)),round(random(100,255)),240]
  this.render= function()
  {
      noStroke();
      fill(this.cor);

        if(velocidade>0&&this.x1+ velocidade>windowWidth+velocidade)
        {
          this.x1=-windowWidth/30 ;
          this.x2=-windowWidth/60;
          this.x3=0;
        }

        else if(velocidade<0&&this.x3+ velocidade<velocidade)
        {
          this.x1=windowWidth;
          this.x2=windowWidth+windowWidth/60;
          this.x3=windowWidth+windowWidth/30;
        }else {
          this.x1+=velocidade;
          this.x2+=velocidade;
          this.x3+=velocidade;
        }
          triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
      }

  };
  function gerarInimigos()
  {
    var switche=true;
    var espacamento= 1.2;
    for(let y=windowWidth/30;y<windowHeight/2;)
    {
      var velocidade=switche?random(windowWidth/300,windowWidth/500):-random(windowWidth/300,windowWidth/500);

      for(let x=0;x<windowWidth;)
      {
        if(x+windowWidth/15<windowWidth+windowWidth/15)
        {

          var y2=y+sqrt(3*((windowWidth/30))*((windowWidth/30)))/2;
          inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade));
          x+=(windowWidth/30)*espacamento;

        }
      }
      inimigos.pop();
      switche=!switche;

      for(let x=(windowWidth/30)*espacamento/2;x<windowWidth;)
      {
        if(x+windowWidth/15<windowWidth+windowWidth/15)
        {

          var y2=y+sqrt(3*((windowWidth/30))*((windowWidth/30)))/2;
          inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade));
          x+=(windowWidth/30)*espacamento;

        }
      }

        y+=(sqrt(3*((windowWidth/30))*((windowWidth/30)))/2)*espacamento;

      inimigos.pop();
    }
  }
