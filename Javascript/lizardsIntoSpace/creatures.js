function creature (){

  this.life = 100;
  this.hunger = 0;
  this.thirst = 0;
  this.size = windowWidth/30;
  // this.race=_____;

  //movement
  this.x = windowWidth/2;
  this.y = windowHeight/2;
  this.speed = 2;

  //emotions
  this.emotion = [0,100,255];
  //personality
  // this.agressivity=____;

  //weaknesses
  // this.wPoison=_____;
  // this.wFire=_____;

  this.render = function (){

    let spacing = windowWidth / 350;

    //Creature
    fill(255);
    stroke(this.emotion);
    ellipse(this.x, this.y, this.size, this.size);

    //Health bar
    let xHealth = this.x - this.size / 2;
    let yHealth = this.y + this.size / 2 + spacing;
    fill(50, 100);
    noStroke();
    rect(xHealth, yHealth, this.size, this.size / 8);
    fill(map(this.life, 0, 50, 255, 0), map(this.life, 0, 100, 0, 255), 0, 100);
    rect(xHealth, yHealth , map(this.life, 0, 100, 0, this.size), this.size / 8);

    //Hunger bar
    let xHunger = xHealth;
    let yHunger = yHealth + this.size / 8 + spacing;
    fill(50, 100);
    noStroke();
    rect(xHunger, yHunger, this.size / 2 - spacing / 2 , this.size / 8);
    fill(255,map(this.hunger, 0, 100, 255, 0), 0, 100);
    rect(xHunger, yHunger , map(this.hunger, 0, 100, this.size / 2 - spacing / 2, 0), this.size / 8);

    //Thirst bar  this.size / 2 - spacing / 2
    let xThirst = xHunger + this.size - (this.size - spacing) / 2;
    let yThirst = yHunger;
    fill(50, 100);
    noStroke();
    rect(xThirst, yThirst, this.size / 2 - spacing / 2 , this.size / 8);
    fill( map(this.thirst, 60, 100, 0, 255), map(this.thirst, 0, 100, 169, 0), map(this.thirst, 0, 100, 255, 0), 100);
    rect(xThirst, yThirst , map(this.thirst, 0, 100, this.size / 2 - spacing / 2, 0), this.size / 8);


  }

  // this.gather(itemindex)
  // {
  //
  // }



}
