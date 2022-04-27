import Enemigo from "./Enemigo.js";
export default class ManagerEnemigos{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
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
        if (this.enemigos.length >= LimiteEnemigos) return;

        let milisegundos = new Date().getTime() - this.ultimoEnemigoCreado.getTime();
        if (milisegundos < 500) return;

        this.ultimoEnemigoCreado = new Date();
        this.AgregarEnemigo();
    }
    AgregarEnemigo(){
        let nuevoEnemigo = new Enemigo(this.canvas, this.ctx);
        this.enemigos.push(nuevoEnemigo);
    }
}