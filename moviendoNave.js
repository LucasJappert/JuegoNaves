import { Nave } from "./Utilidades/ClasesUtiles.js";


const ChequearTeclaPresionada = (evento) => {
    MiNave.Mover(evento.key);
}

var canvas = document.getElementById("micanvas");
var ctx = canvas.getContext("2d");
var MiNave = new Nave(canvas.width/2, canvas.height/2, ctx);

// var img = new Image();
// img.src = './imagenes/minave.jpg';
// img.onload = function(){
//     ctx.drawImage(img, 50, 50);
//  };
var image = document.getElementById('ImagenNave');


const Dibujar = () => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 150, 150);

    MiNave.Dibujar(); 
    setTimeout(() => { Dibujar(); }, 60);
}
Dibujar();
























window.addEventListener('keydown', ChequearTeclaPresionada);






