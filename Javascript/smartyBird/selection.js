var bestkeep = 5;
let beasts = [];
let birdbeasts = [];


function generation(){

  nGeneration++;

  let all=0;
  if(nGeneration%20)
  for(let i=0;i<bestkeep;i++)
  {
    beasts[i]=0;
    birdbeasts[i]=0;
  }



    for(let i=0;i<population;i++){

        //Copying brains
        deadbrains[i].setWeights(brains[i].getWeights());
        all+= cemetery[i].fitness;

        let min=0;

        for(let u=0;u<bestkeep;u++)
        {
          if(cemetery[birdbeasts[u]].fitness<cemetery[birdbeasts[min]].fitness){
            min=u;
          }
        }
          for(let u=0;u<bestkeep;u++)
          {
            if(cemetery[i].fitness>=cemetery[beasts[u]].fitness){
              beasts[min]=cemetery[i].mind;
              birdbeasts[min]= i;
              break;
            }
          }

    }

  //Creating a new population
  let counter=0;
  let counterb=0;
  let counterR=0;
  let max=0;


  for(let u=0;u<bestkeep;u++)
  {
    if(cemetery[birdbeasts[u]].fitness>=cemetery[birdbeasts[max]].fitness){
      max=u;
    }
  }

  for(let i=0;i<population;i++)
  {

    if(cemetery[birdbeasts[max]].fitness<150){
      crossover(i,i,i,true);
      birds.push(new bird(i));
      continue;

    }


    let found=false;
    //Selecting the fathers
    for(let u=0;u<bestkeep;u++)
      if(i==beasts[u]){
        brains[i].setWeights(deadbrains[i].getWeights());
        birds.push(new bird(i));
        found=true;

      }

      if(found)
        continue;

      if(counter<bestkeep){
        crossover(beasts[counter],beasts[counter],i)
        birds.push(new bird(i));
        counter++;
        continue;


      }
      if(counterb<bestkeep){
         crossover(beasts[counterb],beasts[counterb],i)
        birds.push(new bird(i));
        counterb++;
        continue;

       }
       if(counterR<bestkeep){
          crossover(beasts[counterR],beasts[counterR],i)
         birds.push(new bird(i));
         counterR++;
         continue;

        }
      if(1){
        crossover(i,i,i,true);
        birds.push(new bird(i));
        counterR++;
        continue;

       }
      //Selecting the fathers

      let b1 = random(all);
      let b2 = random(all);
      let ib1 = undefined;
      let ib2 = undefined;
      let rsum=0;

      //Picking the index of them

      for(let i=0;i<population;i++)
      {

        rsum+=cemetery[i].fitness;

        if(ib1 == undefined && rsum>=b1)
          ib1= i;

        if(ib2 == undefined && rsum>=b2)
          ib2 = i;

        if(ib1 !== undefined && ib2 !== undefined)
          break;

      }
      //Recreation
        if(ib1==undefined)
          ib1=round(random(population-1));
        if(ib2==undefined)
          ib2=round(random(population-1));
        crossover(ib1,ib2,i);
        birds.push(new bird(i));

  }

  //Cleaning

  tubes= [];
  cemetery= [];
}

//Mixing up genes


function crossover(brain0,brain1,index,para=false){

    tf.tidy(() => {

    var b0 = deadbrains[brain0];
    var b1 = deadbrains[brain1];

    // Array to store the weights

    var array = [];
    array[0]=[];
    array[1]=[];
    for(let i=0; i<b1.getWeights().length; i++)
    {

      // Translating the tensors to the array

      array[0][i]=b0.getWeights()[i].dataSync();
      array[1][i]=b1.getWeights()[i].dataSync();

      // Tweaking the data
      let aleatorio =random(array[0][i].length);
      for(let j=0; j<array[0][i].length; j++){

        let prob = random(1);
        if(para)
          array[0][i][j] = random(-1,1)
        else if(prob<0.1)
          array[0][i][j] *= random(1.5,-.5);
        else if(j>aleatorio)
          array[0][i][j] *= random(.7,1.3);

        //else if(prob>=8)
          //array[0][i][j] = random(1);

      }


      // Translating the array back to tensors

      array[0][i]=tf.tensor(array[0][i],b1.getWeights()[i].shape);

    }

    //setting the genes

    b0.setWeights(array[0]);

    //returning the model
    brains[index].setWeights(b0.getWeights());


  });

}


/*
for(let i=0;i<ombro.modelo.getWeights().length;i++)
{
    console.log(ombro.modelo.getWeights()[i].dataSync());
}



*/
