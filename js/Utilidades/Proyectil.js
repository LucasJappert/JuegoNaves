export default class Proyectil{
    constructor(x, y, canvas, ctx){
        this.x = x;
        this.y = y;
        this.canvas = canvas;
        this.ctx = ctx;
        this.velocidad = -10;
        this.eliminar = false;
        this.radio = 5;
    }
    Actualizar(){
        this.y += this.velocidad;
        if (this.y < 0) this.eliminar = true;
    }
    Dibujar(){
        let ctx = this.ctx;
        ctx.beginPath();
        ctx.fillStyle = '#0F0';
        ctx.strokeStyle = '#0F0';
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.stroke();
    }
}