var estouro= [];
var vitori;
var musica;
var isPlaying== false;
function spop()
{
  estouro[round(random(0,estouro.length-1))].volume(0.6);
  estouro[round(random(0,estouro.length-1))].play();

};
function victowry()
{
  vitori.volume(1);
  vitori.play();
}
function musicyea()
{
  /*Atmospheric French-style chillout with a retro beat, accompanied by a Guitars, Rhodes, bass, synth pads and arpeggios, ambience, percussion and dub effects. Conveys a romantically dreamy mood.
Ideal for Lifestyle, fashion, sports, innovative technology, bar and lounge movies. 117bpm (Artist: Vodovoz) */
  musica.volume(0.5);
  musica.pause();
  musica.loop();
}
function loade()
{
  musica= createAudio('./audio/P5JSGAME/Come Closer.mp3');
  estouro.push(createAudio('./audio/P5JSGAME/pop1.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop2.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop3.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop4.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop5.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop1.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop2.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop3.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop4.mp3'));
  estouro.push(createAudio('./audio/P5JSGAME/pop5.mp3'));
  vitori= createAudio('./audio/P5JSGAME/win.mp3');

  musicyea();
}
