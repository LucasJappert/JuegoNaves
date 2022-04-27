import Proyectil from "./Proyectil.js";
import {Colision} from "./FuncionesUtiles.js";

export default class Nave{
    constructor(){
        this.vidaActual = 100;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.velocidad = 5;
        this.scale = 0.5;
        var itemImagen = imagenes.find(item => item.src == "../imagenes/minave.png");
        this.image = itemImagen.img;
        this.tamañoNave = this.image.width * this.scale;
        let areaX = this.x - (this.tamañoNave / 2);
        let areaY = this.y - (this.tamañoNave / 2);
        this.rectArea = {
            x: areaX, 
            y: areaY,  
            w: this.tamañoNave, 
            h: this.tamañoNave
        };

        this.rotacion = 0;
        this.proyectiles = [];
        this.ultimoDisparo = new Date();
        this.velocidadDisparo = 100;
    }
    Actualizar(){

        if (TeclasPresionadas.hasOwnProperty("w")) this.Mover("w");
        if (TeclasPresionadas.hasOwnProperty("s")) this.Mover("s");
        if (TeclasPresionadas.hasOwnProperty("a")) this.Mover("a");
        if (TeclasPresionadas.hasOwnProperty("d")) this.Mover("d");
        if (TeclasPresionadas.hasOwnProperty(" ")) this.Disparar();

        this.ChequearImpactoSobreEnemigo();
        var i = this.proyectiles.length;
        while(i--) {
            this.proyectiles[i].Actualizar();
            this.proyectiles[i].ChequearImpactoSobreEnemigo();
            if (this.proyectiles[i].eliminar) this.proyectiles.splice(i, 1);
        }
        
        this.rectArea.x = this.x - (this.tamañoNave / 2);
        this.rectArea.y = this.y - (this.tamañoNave / 2);
    }
    Dibujar(){

        if (this.rotacion >= 360) this.rotacion = 0;
        ctx.save();
        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNave, -this.tamañoNave);
        ctx.setTransform(1,0,0,1,0,0);

        this.proyectiles.forEach(proyectil => {
            proyectil.Dibujar();
        });
        ctx.restore();
    }
    Disparar(){
        let milisegundos = new Date().getTime() - this.ultimoDisparo.getTime();
        if (milisegundos < this.velocidadDisparo) return;

        this.ultimoDisparo = new Date();
        let nuevoProyectil = new Proyectil(this.x, this.y - this.tamañoNave/2, canvas, ctx);
        this.proyectiles.push(nuevoProyectil);
    }

    ChequearImpactoSobreEnemigo(){
        let enemigoMasCercano = miManagerEnemigos.ObtenerEnemigoMasCercano(this.x, this.y);
        if (enemigoMasCercano != null){
            if (Colision(this.rectArea, enemigoMasCercano.rectArea)){
                enemigoMasCercano.Destruir();
                this.vidaActual -= enemigoMasCercano.dañoPorColision;
                if (this.vidaActual <= 0) {
                    this.vidaActual = 0;
                    juegoFinalizado = true;
                }
            }
        }
    }
    Mover(tecla){
        if (tecla == "w") this.y -= this.velocidad;
        if (tecla == "s") this.y += this.velocidad;
        if (tecla == "a") this.x -= this.velocidad;
        if (tecla == "d") this.x += this.velocidad;
        
        if (this.x > canvas.width - this.tamañoNave/2) this.x = canvas.width - this.tamañoNave/2;
        if (this.x < this.tamañoNave/2) this.x = this.tamañoNave/2;
        if (this.y > canvas.height - this.tamañoNave/2) this.y = canvas.height - this.tamañoNave/2;
        if (this.y < this.tamañoNave/2) this.y = this.tamañoNave/2;
    }
}