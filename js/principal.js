import Nave from "./Utilidades/Nave.js";
import Proyectil from "./Utilidades/Proyectil.js";


var miNave = new Nave(canvas, ctx);
var particulas = [];
var fps = 1000 / 60;


const Actualizar = () => {
    miNave.Actualizar();

    var i = particulas.length;
    while(i--) {
        if (particulas[i].eliminar) particulas.splice(i, 1); 
        else {
            particulas[i].Actualizar();
            particulas[i].Dibujar();
        }
    }

    ctx.setTransform(1,0,0,1,0,0);
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'rgba(0, 0, 0, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    miNave.Dibujar(); 
    setTimeout(() => { Actualizar(); }, fps);
}
Actualizar();




























