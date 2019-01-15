var readyShot=5, readyShote=false,once=true;
var barra;
function setup()
{
  background(40);
}
function draw()
{
  while(deviceOrientation=='portrait')
  {

    fill(255);
    textSize(windowWidth/30);
    textAlign(CENTER);
    text("Vire o dispositivo para modo paisagem", windowWidth/2,windowHeight/2);
    text("para uma melhor experiência!", windowWidth/2, windowHeight/2 + windowWidth/30);
  }
  if(once){
    createCanvas(windowWidth,windowHeight-4);
    once=false;
    nave= new Nave();
    barra= new Barra();
    nave.start();
    gerarInimigos();
  }

  background(40,150);
  tecla();
  mobile();
  nave.render();
  if(frameCount%50==0&&readyShot<5)
    readyShot++;
  readyShote=frameCount%10?true:readyShote;
  barra.render(readyShot);
  for(let i=inimigos.length-1;i>=0;i--)
  {
        inimigos[i].render();
  }
  for(let i=bullets.length-1;i>=0;i--)
  {

     if(bullets[i].x>windowWidth||bullets[i].x<0||bullets[i]>windowHeight)
      bullets.slice(i,i+1);
    else{
      bullets[i].render();

    }

  }


}
function tecla()
{
  if(keyIsDown(LEFT_ARROW)||keyIsDown(RIGHT_ARROW))
  {
    nave.walk(keyIsDown(RIGHT_ARROW));
  }
}

function keyPressed()
{
  if(key==' '&&readyShot>0)
  {
    atirar();
  }
}
function atirar()
{
  bullets.push(new Bala(nave.x+nave.dimensions/2,nave.y));
  bullets[bullets.length-1].start();
  readyShot--;
}
function mobile()
{
  if(deviceOrientation=='portrait')
  {    if(rotationY>20){
      nave.walk(true);
    }
    else if(rotationY<-20) {
      nave.walk(false);
    }
  }else{
    if(rotationX>20){
      nave.walk(true);
    }
    else if(rotationX<-20) {
      nave.walk(false);
    }
  }


}
function touchStarted()
{
  if(readyShot>0&&readyShote==true)
  {
    atirar();
    readyShote=false;
  }

}
