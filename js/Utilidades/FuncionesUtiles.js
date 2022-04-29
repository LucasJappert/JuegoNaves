import ManagerEnemigos from "./ManagerEnemigos.js";
import ManagerExplosiones from "./ManagerExplosiones.js";
import ManagerProyectiles from "./ManagerProyectiles.js";
import { MiNave } from "../Modelos/MiNave.js";

const RandomEntre = (min, max) => {
    return min + Math.random() * (max - min);
}
const Colision = (rect1, rect2) => {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        return true;
    }

    return false;
}

const CargarImagen = path => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
            resolve(img)
        }
        img.onerror = e => {
            reject(e)
        }
    })
}

async function PrecargarImagenes() {
    let nombres = [];
    nombres.push("minave");
    nombres.push("enemy1");
    nombres.push("enemy2");
    nombres.push("enemy3");
    nombres.push("enemy4");
    nombres.push("enemy5");
    nombres.push("enemy6");
    for (let i = 0; i < nombres.length; i++) {
        const url = `../imagenes/${nombres[i]}.png`;
        let img = await CargarImagen(url);
        imagenes.push({
            src: nombres[i],
            img: img
        });
    }
}

function ReiniciarJuego() {
    miNave = new MiNave(100, "minave", canvas.width/2, canvas.height-100);
    miManagerEnemigos = new ManagerEnemigos();
    miManagerExplosiones = new ManagerExplosiones();
    miManagerProyectiles = new ManagerProyectiles();

    juegoFinalizado = false;
    puntajeTotal = 0;
}

/**
 * Enum for common colors.
 * @readonly
 * @enum {{name: string, hex: string}}
 */
const TipoObjeto = Object.freeze({
    Jugador: "Jugador",
    Enemigo: "Enemigo"
});

export {
    RandomEntre,
    Colision, CargarImagen, PrecargarImagenes,
    ReiniciarJuego, TipoObjeto
};