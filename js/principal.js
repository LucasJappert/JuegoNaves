import Nave from "./Utilidades/Nave.js";
import ManagerEnemigos from "./Utilidades/ManagerEnemigos.js";
import ManagerExplosiones from "./Utilidades/ManagerExplosiones.js";
import { EscenaGameOver } from "./Escenas/EscenaGameOver.js";
import { EscenaInterfaceUsuario } from "./Escenas/EscenaInterfaceUsuario.js";
import { EscenaFondo } from "./Escenas/EscenaFondo.js";
import { CargarImagen } from "./Utilidades/FuncionesUtiles.js";

var miEscenaInterfaceUsuario = new EscenaInterfaceUsuario(ctx);
var miEscenaFondo = new EscenaFondo(ctx);
var miEscenaGameOver = new EscenaGameOver(ctx);
const Actualizar = (timestamp) => {

    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoFinalizado == false){
        miNave.Actualizar();
        miManagerEnemigos.Actualizar();
        miManagerExplosiones.Actualizar();
    } 
    
    //Limpiar canvas
    miEscenaFondo.Dibujar();


    //DIBUJO MUNDO
    miNave.Dibujar(); 
    miManagerEnemigos.Dibujar();
    miManagerExplosiones.Dibujar();
    miEscenaInterfaceUsuario.Dibujar(timestamp);

    if (juegoFinalizado) miEscenaGameOver.Dibujar();
    
    requestAnimationFrame(Actualizar);
}
//Actualizar();

await PrecargarImagenes();
ReiniciarJuego();
requestAnimationFrame(Actualizar);

async function PrecargarImagenes(){
    let urls = [];
    urls.push("../imagenes/minave.png");
    urls.push("../imagenes/enemy1.png");
    urls.push("../imagenes/enemy2.png");
    urls.push("../imagenes/enemy3.png");
    urls.push("../imagenes/enemy4.png");
    urls.push("../imagenes/enemy5.png");
    urls.push("../imagenes/enemy6.png");
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        let img = await CargarImagen(url);
        imagenes.push({
            src: url,
            img: img
        });
    }
}
function ReiniciarJuego() {
    miNave = new Nave(canvas, ctx);
    miManagerEnemigos = new ManagerEnemigos(canvas, ctx);
    miManagerExplosiones = new ManagerExplosiones(canvas, ctx);
    juegoFinalizado = false;
    puntajeTotal = 0;
}
export { ReiniciarJuego };





























