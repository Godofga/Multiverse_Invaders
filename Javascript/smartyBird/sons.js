var musica;
function loadSounds(){
  musica = loadSound('./audio/thinkuriboh/lofi.mp3');
  //flap = loadSound('../Site/audio/thinkuriboh/lofi.mp3');
}
function playMusic(){
  musica.setVolume(1);
  musica.loop();
}
