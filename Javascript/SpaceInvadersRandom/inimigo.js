var inimigos=[];
function Inimigo(x2,y1,y2,velocidade,cor)
{
  this.x1=x2-windowWidth/60;
  this.y1=y1;
  this.x2=x2;
  this.y2=y2;
  this.x3=x2+windowWidth/60;
  this.y3=y1;
  this.h=false;
  this.velocidade= velocidade;
  this.vivo=true;
  this.morte= function(){
    if(this.vivo)
    {
      this.vivo=false;
      this.cor=[255,255,255,255];
      this.x1+=windowWidth/1000;
      this.x3-=windowWidth/1000;
    }

  };
  this.cor=cor;
  this.render= function()
  {
      noStroke();
      fill(this.cor);
      if(!this.vivo&&!this.h)
      {
        if(this.x1-this.x3<windowWidth/30){
          this.x1+=windowWidth/1000;
          this.x3-=windowWidth/1000;
        //  this.cor[3]=map(this.x1,this.x3,-windowWidth/30,windowWidth/30,255,0);
        }
        else{
          this.h=true;
        }

      }

        if(this.vivo&&this.velocidade>0&&this.x2-windowWidth/60+ this.velocidade>windowWidth+this.velocidade)
        {
          this.x1=-windowWidth/30 ;
          this.x2=-windowWidth/60;
          this.x3=0;
        }

        else if(this.vivo&&this.velocidade<0&&this.x2+windowWidth/60+ this.velocidade<this.velocidade)
        {
          this.x1=windowWidth;
          this.x2=windowWidth+windowWidth/60;
          this.x3=windowWidth+windowWidth/30;
        }else if(!this.vivo&&this.velocidade>0&&this.x2-windowWidth/60+ this.velocidade>windowWidth+this.velocidade)
        {
          this.x3=-windowWidth/30 ;
          this.x2=-windowWidth/60;
          this.x1=0;
        }
          else if(!this.vivo&&this.velocidade<0&&this.x2+windowWidth/60+ this.velocidade<this.velocidade)
        {
          this.x3=windowWidth;
          this.x2=windowWidth+windowWidth/60;
          this.x1=windowWidth+windowWidth/30;
        }else {
          this.x1+=this.velocidade;
          this.x2+=this.velocidade;
          this.x3+=this.velocidade;
        }
        triangle(this.x1,this.y1,this.x2,this.y2,this.x3,this.y3);
      };

  };
  function gerarInimigos(first)
  {
    /*

    inimigos[i].cor=[round(random(50,255)),round(random(50,255)),round(random(50,255 )),240];
    inimigos[i].velocidade*=2;
    inimigos[i].h=false;

    */
    print(first);
    var switche=true;
    var espacamento= 1.2;
    for(let y=windowWidth/30;y<windowHeight/2;)
    {
      var velocidade=switche?random(windowWidth/300,windowWidth/500):-random(windowWidth/300,windowWidth/500);
      !first?velocidade*=2:velocidade*=1;
      for(let x=0;x<windowWidth;)
      {
        if(x+windowWidth/15<windowWidth+windowWidth/15)
        {

          var y2=y+sqrt(3*((windowWidth/30))*((windowWidth/30)))/2;

          if(first)
            inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade, [round(random(15,45)),round(random(0,0)),round(random(0,0 )),240]));
          else {
            inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade, [round(random(50,220)),round(random(50,220)),round(random(50,220 )),240]));
          }
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

          if(first)
            inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade,[round(random(15,45)),round(random(0,0)),round(random(0,0 )),240]));
          else {
            inimigos.push(new Inimigo(x+windowWidth/30,  switche ? y : y2    ,/*erro*/!switche ? y : y2 /*erro*/,velocidade,[round(random(50,220)),round(random(50,220)),round(random(50,220 )),240]));
          }
          x+=(windowWidth/30)*espacamento;

        }
      }

        y+=(sqrt(3*((windowWidth/30))*((windowWidth/30)))/2)*espacamento;

      inimigos.pop();
    }
  }
