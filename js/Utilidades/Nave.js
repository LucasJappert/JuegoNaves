import Proyectil from "./Proyectil.js";

export default class Nave{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.velocidad = 10;
        var img = new Image();
        img.src = '../imagenes/minave.png';
        this.image = img;
        this.rotacion = 0;
        this.tamañoNave = this.image.width;
        this.proyectiles = [];
        this.ultimoDisparo = new Date();
        this.velocidadDisparo = 200;
        this.scale = 0.5;
    }
    Actualizar(){
        if (TeclasPresionadas.hasOwnProperty("w")) this.Mover("w");
        if (TeclasPresionadas.hasOwnProperty("s")) this.Mover("s");
        if (TeclasPresionadas.hasOwnProperty("a")) this.Mover("a");
        if (TeclasPresionadas.hasOwnProperty("d")) this.Mover("d");
        if (TeclasPresionadas.hasOwnProperty(" ")) this.Disparar();

        var i = this.proyectiles.length;
        while(i--) {
            this.proyectiles[i].Actualizar();
            if (this.proyectiles[i].eliminar) this.proyectiles.splice(i, 1);
        }
    }
    Dibujar(){
        if (this.rotacion >= 360) this.rotacion = 0;
        let ctx = this.ctx;

        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNave/2, -this.tamañoNave/2);
        ctx.setTransform(1,0,0,1,0,0);

        this.proyectiles.forEach(proyectil => {
            proyectil.Dibujar();
        });
    }
    Disparar(){
        let milisegundos = new Date().getTime() - this.ultimoDisparo.getTime();
        if (milisegundos < this.velocidadDisparo) return;

        this.ultimoDisparo = new Date();
        let nuevoProyectil = new Proyectil(this.x, this.y - this.tamañoNave/2, this.canvas, this.ctx);
        this.proyectiles.push(nuevoProyectil);
    }

    Mover(tecla){
        if (tecla == "w") this.y -= this.velocidad;
        if (tecla == "s") this.y += this.velocidad;
        if (tecla == "a") this.x -= this.velocidad;
        if (tecla == "d") this.x += this.velocidad;
        
        if (this.x > this.canvas.width - this.tamañoNave/2) this.x = this.canvas.width - this.tamañoNave/2;
        if (this.x < this.tamañoNave/2) this.x = this.tamañoNave/2;
        if (this.y > this.canvas.height - this.tamañoNave/2) this.y = this.canvas.height - this.tamañoNave/2;
        if (this.y < this.tamañoNave/2) this.y = this.tamañoNave/2;
    }
}