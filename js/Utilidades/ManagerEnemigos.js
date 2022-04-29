import { Enemigo } from "../Modelos/Enemigo.js";
export default class ManagerEnemigos{
    constructor(){
        this.enemigos = [];
        this.ultimoEnemigoCreado = new Date();
    }

    Actualizar(){
        this.ChequearNuevosEnemigos();

        var i = this.enemigos.length;
        //console.log(this.enemigos.length);
        while(i--) {
            this.enemigos[i].Actualizar();
            if (this.enemigos[i].eliminar) this.enemigos.splice(i, 1);
        }
    }
    Dibujar(){
        this.enemigos.forEach(enemigo => {
            enemigo.Dibujar();
        });
    }
    ChequearNuevosEnemigos(){
        if (this.enemigos.length >= limiteEnemigos) return;

        let milisegundos = new Date().getTime() - this.ultimoEnemigoCreado.getTime();
        if (milisegundos < 200) return;

        this.ultimoEnemigoCreado = new Date();
        this.AgregarEnemigo();
    }
    AgregarEnemigo(){
        var x = Math.round(Math.random() * canvas.width);
        let nombreImagen = `enemy${Math.floor(Math.random() * 6) + 1}`;
        let nuevoEnemigo = new Enemigo(100, nombreImagen, x, -64);
        this.enemigos.push(nuevoEnemigo);
    }
    ObtenerEnemigoMasCercano(posX, posY){
        let menorDistancia = 0;
        let enemigoTemporal = null;
        for (let i = 0; i < this.enemigos.length; i++) {
            let enemigo = this.enemigos[i];
            if (enemigo.cargaLista == false) continue;

            let a = enemigo.x - posX;
            let b = enemigo.y - posY;
            let distancia = Math.hypot(a, b);
            if (distancia < menorDistancia || enemigoTemporal == null) {
                enemigoTemporal = enemigo;
                menorDistancia = distancia;
            }
        }
        return enemigoTemporal;
    }
}