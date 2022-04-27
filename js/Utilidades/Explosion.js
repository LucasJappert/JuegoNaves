import { RandomEntre } from "./FuncionesUtiles.js";
export default class Explosion{
    constructor(canvas, ctx, x, y){
        this.particulas = [];
        this.canvas = canvas;
        this.ctx = ctx;
        // var img = new Image();
        // img.src = `../imagenes/enemy${Math.floor(Math.random() * 6) + 1}.png`;
        // this.image = img;
        this.eliminar = false;
        for (let i = 0; i < 60; i++) {
            let particula = new Particula(canvas, ctx, x, y);
            this.particulas.push(particula);
        }
    }
    Actualizar(){
        var i = this.particulas.length;
        while(i--) {
            this.particulas[i].Actualizar();
            if (this.particulas[i].eliminar) this.particulas.splice(i, 1);
        }
        if (this.particulas.length == 0) this.eliminar = true;
    }
    Dibujar(){
        this.particulas.forEach(particula => {
            particula.Dibujar();
        });
    }
}

class Particula{
    constructor(canvas, ctx, x, y){
        this.canvas = canvas;
        this.ctx = ctx;
        this.velocidad = 2;
        this.dVelocidad = RandomEntre(0.94, 0.98);
        this.radio = 3;
        this.x = x;
        this.y = y;
        this.dx = RandomEntre(-2, 2);
        this.dy = RandomEntre(-2, 2);
        this.scale = 1;
        this.opacity = 1;
        this.dOpacity = RandomEntre(0.94, 0.97);
        this.r = Math.random() * 255;
        this.g = Math.random() * 255;
        this.b = Math.random() * 255;
    }
    
    Actualizar(){
        this.x += this.dx * this.velocidad;
        this.y += this.dy * this.velocidad;
        this.velocidad *= this.dVelocidad;
        this.opacity *= this.dOpacity;
        if (this.velocidad <= 0 || this.opacity <= 0.05) this.eliminar = true;
    }
    Dibujar(){
        let ctx = this.ctx;
        this.color = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}