//#region "Imports"
import { EscenaGameOver } from "./Escenas/EscenaGameOver.js";
import { EscenaInterfaceUsuario } from "./Escenas/EscenaInterfaceUsuario.js";
import { EscenaFondo } from "./Escenas/EscenaFondo.js";
import { PrecargarImagenes, ReiniciarJuego } from "./Infraestructura/FuncionesUtiles.js";
import { ControlesMobileIzquierda } from "./Controles/ControlesMobileIzquierda.js";
import { ControlesDesktop } from "./Controles/ControlesDesktop.js";
//#endregion


await PrecargarImagenes();
ReiniciarJuego();
setInterval(() => {
    Actualizar()
}, 1000/75);
requestAnimationFrame(Dibujar);


var miEscenaInterfaceUsuario = new EscenaInterfaceUsuario();
var miEscenaFondo = new EscenaFondo();
var miEscenaGameOver = new EscenaGameOver();
controlesMobileIzquierda = new ControlesMobileIzquierda();
controlesDesktop = new ControlesDesktop();
function Dibujar() {

    //Limpiar canvas
    miEscenaFondo.Dibujar();

    //DIBUJO MUNDO
    miNave.Dibujar();
    miManagerEnemigos.Dibujar();
    miManagerExplosiones.Dibujar();
    miEscenaInterfaceUsuario.Dibujar();
    miManagerProyectiles.Dibujar();
    controlesMobileIzquierda.Dibujar();

    if (juegoFinalizado) miEscenaGameOver.Dibujar();

    requestAnimationFrame(Dibujar);
}
const Actualizar = () => {
    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoEnFoco && juegoFinalizado == false) {
        controlesDesktop.Actualizar();
        controlesMobileIzquierda.Actualizar();
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






























