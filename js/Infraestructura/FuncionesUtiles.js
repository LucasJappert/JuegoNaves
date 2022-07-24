import ManagerEnemigos from "../Modelos/Managers/ManagerEnemigos.js";
import ManagerExplosiones from "../Modelos/Managers/ManagerExplosiones.js";
import ManagerProyectiles from "../Modelos/Managers/ManagerProyectiles.js";
import { MiNave } from "../Modelos/MiNave.js";

const RandomEntre = (min, max) => {
    return min + Math.random() * (max - min);
}
const Colision = (rect1, rect2) => {
    if (rect1.x < rect2.x + rect2.ancho &&
        rect1.x + rect1.ancho > rect2.x &&
        rect1.y < rect2.y + rect2.alto &&
        rect1.alto + rect1.y > rect2.y) {
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
    let nombres = [
        "minave", "enemy1", "enemy2", "enemy3", "enemy4", "enemy5", "enemy6",
        "roca", "circulo", "circuloChico", "estrella", "proyectil1", "proyectil2"
    ];
    for (let i = 0; i < nombres.length; i++) {
        const url = `./imagenes/${nombres[i]}.png`;
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
function FinalizarJuego(){
    juegoFinalizado = true;
}

function MilisegundosEntreFechas(fecha1, fecha2){
    return fecha1.getTime() - fecha2.getTime();
}
function AnguloEntre2Puntos(p1, p2) {
    var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
    return angleDeg;
}
function Seno(anguloEnGrados){
    return Math.sin(anguloEnGrados * Math.PI / 180).toFixed(2);
}
function Coseno(anguloEnGrados){
    return Math.cos(anguloEnGrados * Math.PI / 180).toFixed(2);
}

const TipoObjeto = Object.freeze({
    Jugador: "Jugador",
    Enemigo: "Enemigo"
});
const Direccion = Object.freeze({
    Nula: null,
    Arriba: -90,
    ArribaDerecha: -45,
    Derecha: 0,
    AbajoDerecha: 45,
    Abajo: 90,
    AbajoIzquierda: 135,
    Izquierda: 180,
    ArribaIzquierda: -135,
});
const TipoProyectiles = {
    Proyectil1: "proyectil1",
    Proyectil2: "proyectil2"
};

export {
    RandomEntre,
    Colision, CargarImagen, PrecargarImagenes,
    ReiniciarJuego, TipoObjeto, MilisegundosEntreFechas,
    FinalizarJuego, Direccion, AnguloEntre2Puntos,
    Seno, Coseno, TipoProyectiles
};