var estouro= [];
var vitori;
function spop()
{
  estouro[round(random(0,estouro.length-1))].volume(1);
  estouro[round(random(0,estouro.length-1))].play();

};
function victowry()
{
  vitori.volume(1);
  vitori.play();
}
function loade()
{
  estouro.push(createAudio('./audio/pop1.mp3'));
  estouro.push(createAudio('./audio/pop2.mp3'));
  estouro.push(createAudio('./audio/pop3.mp3'));
  estouro.push(createAudio('./audio/pop4.mp3'));
  estouro.push(createAudio('./audio/pop5.mp3'));
  estouro.push(createAudio('./audio/pop1.mp3'));
  estouro.push(createAudio('./audio/pop2.mp3'));
  estouro.push(createAudio('./audio/pop3.mp3'));
  estouro.push(createAudio('./audio/pop4.mp3'));
  estouro.push(createAudio('./audio/pop5.mp3'));
  vitori= createAudio('./audio/win.mp3');
}
