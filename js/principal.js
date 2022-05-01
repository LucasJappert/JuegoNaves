//#region "Imports"
import { EscenaGameOver } from "./Escenas/EscenaGameOver.js";
import { EscenaInterfaceUsuario } from "./Escenas/EscenaInterfaceUsuario.js";
import { EscenaFondo } from "./Escenas/EscenaFondo.js";
import { PrecargarImagenes, ReiniciarJuego } from "./Utilidades/FuncionesUtiles.js";
import { EscenaUIMobile } from "./Escenas/EscenaUIMobile.js";
//#endregion


await PrecargarImagenes();
ReiniciarJuego();
requestAnimationFrame(Actualizar);


var miEscenaInterfaceUsuario = new EscenaInterfaceUsuario();
var miEscenaFondo = new EscenaFondo();
var miEscenaGameOver = new EscenaGameOver();
var escenaUIMobile = new EscenaUIMobile();
function Actualizar() {

    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoFinalizado == false) {
        escenaUIMobile.Actualizar();
        miEscenaFondo.Actualizar();
        miNave.Actualizar();
        miManagerEnemigos.Actualizar();
        miManagerExplosiones.Actualizar();
        miManagerProyectiles.Actualizar();
    }

    //Limpiar canvas
    miEscenaFondo.Dibujar();

    //DIBUJO MUNDO
    miNave.Dibujar();
    miManagerEnemigos.Dibujar();
    miManagerExplosiones.Dibujar();
    miEscenaInterfaceUsuario.Dibujar();
    miManagerProyectiles.Dibujar();
    escenaUIMobile.Dibujar();

    if (juegoFinalizado) miEscenaGameOver.Dibujar();

    requestAnimationFrame(Actualizar);
}






























