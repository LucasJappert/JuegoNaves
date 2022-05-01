import { RandomEntre } from "./FuncionesUtiles.js";
export default class Explosion{
    constructor(x, y){
        this.particulas = [];
        // var img = new Image();
        // img.src = `../imagenes/enemy${Math.floor(Math.random() * 6) + 1}.png`;
        // this.image = img;
        this.eliminar = false;
        for (let i = 0; i < 100; i++) {
            let particula = new Particula(x, y);
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
    constructor(x, y){
        this.velocidad = 2;
        this.dVelocidad = RandomEntre(0.94, 0.98);
        this.radio = RandomEntre(1, 4);
        this.x = x;
        this.y = y;
        this.dx = RandomEntre(-2, 2);
        this.dy = RandomEntre(-2, 2);
        this.scale = RandomEntre(0.1, 0.3);
        this.opacity = 1;
        this.dOpacity = RandomEntre(0.94, 0.97);
        this.r = 255;
        this.g = 255;
        this.b = 255;
        var imagen = imagenes.find(item => item.src == "roca");
        this.image = imagen.img;
        this.tamañoW = this.image.width * this.scale;
        this.tamañoH = this.image.height * this.scale;
    }
    
    Actualizar(){
        this.x += this.dx * this.velocidad;
        this.y += this.dy * this.velocidad;
        this.velocidad *= this.dVelocidad;
        this.opacity *= this.dOpacity;
        if (this.velocidad <= 0 || this.opacity <= 0.05) this.eliminar = true;
    }
    // Dibujar(){
    //     this.color = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.opacity})`;
    //     ctx.save();
    //     ctx.beginPath();
    //     ctx.fillStyle = this.color;
    //     ctx.strokeStyle = this.color;
    //     ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
    //     ctx.fill();
    //     ctx.stroke();
    //     ctx.restore();
    // }
    Dibujar() {

        //if (this.rotacion >= 360) this.rotacion = 0;
        ctx.save();
        ctx.globalAlpha = this.velocidad;
        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        //ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoW, -this.tamañoH);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.restore();
        //this.DibujarRectanguloFondo();
    }
}