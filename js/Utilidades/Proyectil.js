import {Colision} from "./FuncionesUtiles.js";
export default class Proyectil{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.velocidad = -10;
        this.eliminar = false;
        this.radio = 5;
        this.rectArea = {
            x: this.x - this.radio, 
            y: this.y - this.radio,  
            w: this.radio*2, 
            h: this.radio*2
        };
    }
    Actualizar(){
        this.y += this.velocidad;
        this.rectArea.x = this.x;
        this.rectArea.y = this.y;
        if (this.y < 0) this.eliminar = true;
    }
    Dibujar(){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = '#0F0';
        ctx.strokeStyle = '#0F0';
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    ChequearImpactoSobreEnemigo(){
        let enemigoMasCercano = miManagerEnemigos.ObtenerEnemigoMasCercano(this.x, this.y);
        if (enemigoMasCercano != null){
            if (Colision(this.rectArea, enemigoMasCercano.rectArea)){
                this.eliminar = true;
                enemigoMasCercano.Destruir();
            }
        }
    }
}