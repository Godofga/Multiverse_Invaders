class bird{

    constructor(index ,ve=false){

      //Neuroevolution

      this.fitness = 0;
      this.mind = index;

      //Movement

      this.jumpTimer=0;
      this.x = canvas.width / 3;
      this.y = random(canvas.height / 2 +30,canvas.height / 2 -30);
      this.vy = 0;
      this.a = 0;
      this.cor = [random(100,120),0,random(200,220),100];

    }


    //Render

    show (){
      if(this.jumpTimer>0)
        this.jumpTimer--;

      fill(this.cor);
      if(this.jumpTimer>9)
        image(kuriboh[0],this.x-birdD/2,this.y-birdD/2);
      else if(this.jumpTimer>0)
        image(kuriboh[1],this.x-birdD/2,this.y-birdD/2);
      else {
        image(kuriboh[2],this.x-birdD/2,this.y-birdD/2);
      }
    //  ellipse(this.x, this.y, birdD, birdD);

    }


    //Jump

    jump(){
      this.jumpTimer=18;
      this.vy = -7;
      this.a = 0.5;

    }

    //Movement

    move(){

      this.a += gravity;
      this.vy += this.a;
      this.y += this.vy;
      this.fitness++;

    }

    closestTube(){

      if(tubes[0].x > this.x - birdD/2 -tubeW)
        return tubes[0];
      else
        return tubes[1];

    }

    //Think

    think(){

      /*
        O que quero de input?
        - y do passaro
        - distancia x entre o passaro e o tubo mais proximo
        - velocidade do passaro
        - topy
        - boty

      */

      tf.tidy(() => { // Preventing memory collapse

      let tubo = this.closestTube();
      if(tubo.color<181)
        tubo.color+=.1;
      //Inputs

      //let y = this.y/canvas.height;
      //let v = map(this.vy,-20,20,1,-1);
      //let yt = tubo.topy / canvas.height;
      //let yb = tubo.boty / canvas.height;
      let dx = (tubo.x+tubeW-this.x) / canvas.width;
      let dy = (this.y-((tubo.topy+tubo.boty)/2))/canvas.height;





      //Predict

      let x = tf.tensor2d([dx,dy],[1,2]);
      let previsao = brains[this.mind].predict(x);
      if(previsao.dataSync()[0] > 0.5)
         this.jump();

    });

    }



    //Death

    death(){

      let tubo = this.closestTube();

      //Hits edges

      if(dist(this.x,this.y,tubo.x,tubo.topy)<birdD/2 || dist(this.x,this.y,tubo.x+tubeW,tubo.topy)<birdD/2 || dist(this.x,this.y,tubo.x,tubo.boty)<birdD/2 || dist(this.x,this.y,tubo.x + tubeW , tubo.boty)<birdD/2 ){
        this.fitness += 10/abs(this.y-((tubo.topy+tubo.boty)/2));
        return true;
        }




      //Hits wall

      if((this.y<tubo.topy||this.y>tubo.boty) && tubo.x-this.x-birdD/2<0 && tubo.x-this.x-birdD/2>-tubeW){
          this.fitness += 10/abs(this.y-((tubo.topy+tubo.boty)/2));
          return true;
      }

      //Goes out of canvas

      if(this.y>canvas.height||this.y<0){
        this.fitness += 10/abs(this.y-((tubo.topy+tubo.boty)/2));
        return true;
      }
      return false;



    }
}
