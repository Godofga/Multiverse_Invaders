var readyShot=10000, readyShote=false,once=true;
var barra,win, bg=[40,150];
function setup()
{
  background(40);
}
function draw()
{
  if(deviceOrientation=='portrait')
    alert("Vire o dispositivo para modo paisagem agora para uma melhor experiência");
  if(once){
    createCanvas(windowWidth,windowHeight-4);
    once=false;
    nave= new Nave();
    barra= new Barra();
    nave.start();
    gerarInimigos(true);
  }

  background(bg);
  tecla();
  mobile();
  nave.render();
  if(frameCount%50==0&&readyShot<5)
    readyShot++;
  readyShote=frameCount%10?true:readyShote;
  barra.render(readyShot,win);
  for(let i=bullets.length-1;i>=0;i--)
  {

    if(bullets[i].y+bullets[i].a<=0)
     bullets.splice(i,i+1);

    else{
      for(let a= inimigos.length-1;a>=0;a--)
      {
        if(inimigos[a].vivo)
        {

          if(inimigos[a].y1<inimigos[a].y2)
          {
            if(bullets[i].x<=inimigos[a].x3&&bullets[i].x+bullets[i].l>=inimigos[a].x1&&bullets[i].y>=inimigos[a].y1&&bullets[i].y+bullets[i].a<=inimigos[a].y2)
            {
              inimigos[a].morte();
            }
          }
          else {
            if(bullets[i].x<=inimigos[a].x3&&bullets[i].x+bullets[i].l>=inimigos[a].x1&&bullets[i].y<=inimigos[a].y1&&bullets[i].y+bullets[i].a>=inimigos[a].y2)
            {
              inimigos[a].morte();
            }
          }
        }


      }
        bullets[i].render();

    }

  }
  if(!win)
  {
    win=true;


    for(let i=inimigos.length-1;i>=0;i--)
    {
      inimigos[i].render();
      if(inimigos[i].vivo)
        win=false;
    }
    if(win)
      vitoria();
  }


}


function vitoria()
{

  for(let i=inimigos.length-1;i>=0;i--)
  {
    inimigos= [];
  }
  gerarInimigos(false);
  bg=[255];
  nave.color=0;
}


function tecla()
{
  if(keyIsDown(68)||keyIsDown(RIGHT_ARROW))
  {
    nave.walk(true);
  }
  else if (keyIsDown(65)||keyIsDown(LEFT_ARROW)) {
    nave.walk(false);
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
  bullets.push(new Bala(nave.x+nave.dimensions/2,nave.y,win?0:255));
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
