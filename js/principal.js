import Nave from "./Utilidades/Nave.js";
import ManagerEnemigos from "./Utilidades/ManagerEnemigos.js";
import ManagerExplosiones from "./Utilidades/ManagerExplosiones.js";
import { DibujarEscenaGameOver } from "./Escenas/gameOver.js";


ReiniciarJuego();
//var fps = 1000 / 60;
let fps = 1;
const times = [];
const Actualizar = (timestamp) => {
    while (times.length > 0 && times[0] <= timestamp - 1000) {
        times.shift();
    }
    times.push(timestamp);
    fps = times.length;

    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoFinalizado == false){
        miNave.Actualizar();
        miManagerEnemigos.Actualizar();
        miManagerExplosiones.Actualizar();
    } 
    
    //Limpiar canvas
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);


    //DIBUJO MUNDO
    miNave.Dibujar(); 
    miManagerEnemigos.Dibujar();
    miManagerExplosiones.Dibujar();

    ImpresionesEnPantalla();

    if (juegoFinalizado) DibujarEscenaGameOver(ctx);
    
    //setTimeout(() => { Actualizar(); }, fps);
    requestAnimationFrame(Actualizar);
}
//Actualizar();
requestAnimationFrame(Actualizar);

const ImpresionesEnPantalla = function() {
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.font = "18px arial";
    ctx.fillText(`FPS: ${fps}`, 5, 20);
    ctx.fillText(`PUNTAJE: ${puntajeTotal}`, 5, 40);
    ctx.fillText(`VIDA ACTUAL: ${miNave.vidaActual}`, 5, 60);
}

function ReiniciarJuego() {
    miNave = new Nave(canvas, ctx);
    miManagerEnemigos = new ManagerEnemigos(canvas, ctx);
    miManagerExplosiones = new ManagerExplosiones(canvas, ctx);
    juegoFinalizado = false;
    puntajeTotal = 0;
}
export { ReiniciarJuego };





























