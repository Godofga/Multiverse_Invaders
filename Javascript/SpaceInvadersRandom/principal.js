var readyShot=5;
var barra;
function setup()
{

  createCanvas(windowWidth,windowHeight-4);
  background(40);
  nave= new Nave();
  barra= new Barra();
  nave.start();
  gerarInimigos();


}
function draw()
{
  background(40,150);
  tecla();
  mobile();
  nave.render();
  if(frameCount%50==0&&readyShot<5)
    readyShot++;
  barra.render(readyShot);
  for(let i=inimigos.length-1;i>=0;i--)
  {
        inimigos[i].render();
  }
  for(let i=bullets.length-1;i>=0;i--)
  {
    if(bullets[i].x)
    else if(bullets[i].x>windowWidth||bullets[i].x<0||bullets[i]>windowHeight)
      bullets.slice(i,i+1);
    else
        bullets[i].render();
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
  if(rotationY>20){
    nave.walk(true);
  }
  else if(rotationY<-20) {
    nave.walk(false);
  }
}
function touchStarted()
{
  atirar();
}
