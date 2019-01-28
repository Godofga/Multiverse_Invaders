var musica;
function loadSounds(){
  /*

  "Artificial.Music - Herbal Tea" Attribution 3.0 Unported (CC BY 3.0)
  Music provided by BreakingCopyright: https://youtu.be/6ukEy6FOxZE

  */
  musica = loadSound('./audio/thinkuriboh/lofi.mp3');
  //flap = loadSound('../Site/audio/thinkuriboh/lofi.mp3');
}
function playMusic(){
  musica.setVolume(1);
  musica.loop();
}
