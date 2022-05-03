//#region "Imports"
import { EscenaGameOver } from "./Escenas/EscenaGameOver.js";
import { EscenaInterfaceUsuario } from "./Escenas/EscenaInterfaceUsuario.js";
import { EscenaFondo } from "./Escenas/EscenaFondo.js";
import { PrecargarImagenes, ReiniciarJuego } from "./Utilidades/FuncionesUtiles.js";
import { ComandosMobileIzquierda } from "./Controles/ComandosMobileIzquierda.js";
//#endregion


await PrecargarImagenes();
ReiniciarJuego();
setInterval(() => {
    Actualizar()
}, 1000 / 75);
requestAnimationFrame(Dibujar);


var miEscenaInterfaceUsuario = new EscenaInterfaceUsuario();
var miEscenaFondo = new EscenaFondo();
var miEscenaGameOver = new EscenaGameOver();
comandosMobileIzquierda = new ComandosMobileIzquierda();
function Dibujar() {

    //ACTUALIZO MUNDO
    // if (juegoEnPausa == false && juegoFinalizado == false) {
    //     comandosMobileIzquierda.Actualizar();
    //     miEscenaFondo.Actualizar();
    //     miNave.Actualizar();
    //     miManagerEnemigos.Actualizar();
    //     miManagerExplosiones.Actualizar();
    //     miManagerProyectiles.Actualizar();
    // }
    // if (canvasResized) {
    //     canvasResized = false;
    // }

    //Limpiar canvas
    miEscenaFondo.Dibujar();

    //DIBUJO MUNDO
    miNave.Dibujar();
    miManagerEnemigos.Dibujar();
    miManagerExplosiones.Dibujar();
    miEscenaInterfaceUsuario.Dibujar();
    miManagerProyectiles.Dibujar();
    comandosMobileIzquierda.Dibujar();

    if (juegoFinalizado) miEscenaGameOver.Dibujar();

    requestAnimationFrame(Dibujar);
}
const Actualizar = () => {
    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoFinalizado == false) {
        comandosMobileIzquierda.Actualizar();
        miEscenaFondo.Actualizar();
        miNave.Actualizar();
        miManagerEnemigos.Actualizar();
        miManagerExplosiones.Actualizar();
        miManagerProyectiles.Actualizar();
    }
    if (canvasResized) {
        canvasResized = false;
    }
};






























