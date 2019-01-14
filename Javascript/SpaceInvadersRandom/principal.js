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


  var s = 'rotationY-'+rotationY+'rotationZ'+rotationZ+'rotationX'+'rotationX';

fill(50);
text(s, 10, 10, 70, 80); // Text wraps within text box






  background(40,150);
  tecla();
  mobile();
  nave.render();
  if(frameCount%50==0&&readyShot<5)
    readyShot++;
  barra.render(readyShot);
  for(let i=bullets.length-1;i>=0;i--)
  {
    if(bullets[i].x>windowWidth||bullets[i].x<0||bullets[i]>windowHeight)
      bullets.slice(i,i+1);
    else
        bullets[i].render();
  }
  for(let i=inimigos.length-1;i>=0;i--)
  {
  //  if(bullets[i].x>windowWidth||bullets[i].x<0||bullets[i]>windowHeight)
    //  bullets.slice(i,i+1);
    //else if()
  //  else
        inimigos[i].render();
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
  if(keyIsDown(BACKSPACE)&&readyShot>0)
  {
    bullets.push(new Bala(nave.x+nave.dimensions/2,nave.y));
    bullets[bullets.length-1].start();
    readyShot--;
  }
}
function mobile()
{
  if(rotationY>0){
    nave.walk(true);
  }
  else if(rotationY<-0) {
    nave.walk(false);
  }
}
