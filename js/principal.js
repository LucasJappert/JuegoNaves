//#region "Imports"
import { EscenaGameOver } from "./Escenas/EscenaGameOver.js";
import { EscenaInterfaceUsuario } from "./Escenas/EscenaInterfaceUsuario.js";
import { EscenaFondo } from "./Escenas/EscenaFondo.js";
import { PrecargarImagenes, ReiniciarJuego } from "./Utilidades/FuncionesUtiles.js";
//#endregion

var miEscenaInterfaceUsuario = new EscenaInterfaceUsuario(ctx);
var miEscenaFondo = new EscenaFondo(ctx);
var miEscenaGameOver = new EscenaGameOver(ctx);
const Actualizar = (timestamp) => {

    //ACTUALIZO MUNDO
    if (juegoEnPausa == false && juegoFinalizado == false){
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
    miEscenaInterfaceUsuario.Dibujar(timestamp);
    miManagerProyectiles.Dibujar();

    if (juegoFinalizado) miEscenaGameOver.Dibujar();
    
    requestAnimationFrame(Actualizar);
}
//Actualizar();

await PrecargarImagenes();
ReiniciarJuego();
requestAnimationFrame(Actualizar);






























