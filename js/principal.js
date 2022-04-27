import Nave from "./Utilidades/Nave.js";
import ManagerEnemigos from "./Utilidades/ManagerEnemigos.js";


var miNave = new Nave(canvas, ctx);
var miManagerEnemigos = new ManagerEnemigos(canvas, ctx);
var fps = 1000 / 60;

const Actualizar = () => {
    miNave.Actualizar();
    miManagerEnemigos.Actualizar();

    //Limpiar canvas
    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    miNave.Dibujar(); 
    miManagerEnemigos.Dibujar();

    setTimeout(() => { Actualizar(); }, fps);
}
Actualizar();




























