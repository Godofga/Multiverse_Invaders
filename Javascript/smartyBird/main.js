//Birds

const population = 100;
const birdD = 50;
var birds = [];
var cemetery = [];
var brains = [];
var deadbrains = [];


//Tubes

var tubes = [];
const tubeW = 50;
const vx = 3;// Velocity of the tubes

// Enviroment

const gravity = 0.015;
var initial = true;
var canvas;
var slider;
var frameCountee = 0;
var fontAMGDT;
var kuriboh = [];
//Learning

var nGeneration=1;
const lr = 0.1;
const mut = 0.1;

function preload() {

  fontAMGDT = loadFont('../Site/font/AMGDT.ttf');
  kuriboh[0] = loadImage('../Site/img/smartybird/kuriboh.png');
  kuriboh[1] = loadImage('../Site/img/smartybird/kuriboh1.png');
  kuriboh[2] = loadImage('../Site/img/smartybird/kuriboh2.png');
  loadSounds();
}

function setup(){

  //Setting up canvas

  canvas = createCanvas(800,800);
  canvas.parent('ui');

  slider = createSlider(1, 20, 1);
  slider.style('width', '80px');
  slider.parent('ao');
  slider.position(windowWidth/2, 10);

  noStroke();

  //First generation
  for(let i=0;i<population;i++)
  {

    brains[i]= createBrain();
    deadbrains[i]= createBrain();
    birds[i]= new bird(i,true);

  }
  noLoop();

}



function draw(){

  // Process
  if(initial)
  {
     background(180);
     textFont(fontAMGDT);
     textAlign(CENTER);
     textSize(50);
     fill(40);
     stroke(40);
     strokeWeight(2);
     text("CLIQUE PARA TREINAR" +nGeneration,canvas.width/2+20,canvas.height/2);
     fill(180);
     noStroke();
     rect(canvas.width-70,0,canvas.width,canvas.height);


  } else {

    for(let u=0 ; u < slider.value() ; u++){

      //Add tubes

      if(frameCountee%100+round(vx/50)==0)
        tubes.push(new tube());

      //Move and remove tubes

      for(let i=tubes.length-1 ; i>=0 ; i--){

        tubes[i].move();
        if(tubes[i].x < -tubeW)
          tubes.splice(i, 1);

      }

      //Move and remove birds

      for(let i= birds.length-1;i>=0;i--){

        birds[i].think();
        birds[i].move();
        if(birds[i].death())
          cemetery.push(birds.splice(i,1)[0]);

      }

      //Add Birds

      if(birds.length==0){

        generation();

        //Reset Enviroment

        tubes.push(new tube());
        frameCountee=0;
      }

      //Counter

      frameCountee++;
    }

    //Show

    background(40);

    for(b of birds)
      b.show();

    for(t of tubes)
      t.show();

    textFont(fontAMGDT);
    textAlign(LEFT);
    textSize(32);
    fill(200);
    stroke(200);
    strokeWeight(1);
    text("GERACAO " +nGeneration,10,40);
    noStroke();
  }

}

function touchEnded(){
  if(initial)
  {
    loop();
    playMusic();
    initial= false;
  }


}
