let sonando = false;
let snd = new Audio("medios/musica/musica-epica.mp3");

snd.play();

function musicOn() { //Para apagar y prender la música
  if(sonando){
    sonando = false;
    snd.pause();
    document.getElementById('on-of').src = 'medios/imagenes/mute.jpg';

  } else {
    sonando = true;
    snd.play();
    document.getElementById('on-of').src = 'medios/imagenes/sonido.jpg';
  }
}
//Para subir y bajar el volumen
function volumen() {
  snd.volume = document.getElementById('slider-musica').value ** 2;
}
//Para loopear la canción
snd.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
});