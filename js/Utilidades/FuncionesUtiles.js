import Nave from "./Nave.js";
import ManagerEnemigos from "./ManagerEnemigos.js";
import ManagerExplosiones from "./ManagerExplosiones.js";

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

export {
    RandomEntre, 
    Colision, CargarImagen, PrecargarImagenes,
    ReiniciarJuego
};