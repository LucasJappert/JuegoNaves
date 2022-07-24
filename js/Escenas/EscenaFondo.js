import { RandomEntre } from "../Infraestructura/FuncionesUtiles.js";

class EscenaFondo{
    constructor(){
        this.estrellas = [];
        let i = 50;
        while(i--){
            this.estrellas.push(new Estrella());
        }
    }
    Actualizar(){
        this.estrellas.forEach(estrella => {
            estrella.Actualizar();
        });
    }
    Dibujar(){
        //ctx.save();
       // ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //ctx.restore();
        
        this.estrellas.forEach(estrella => {
            estrella.Dibujar();
        });
    }
}

class Estrella{
    constructor(){
        var imagen = imagenes.find(item => item.src == "estrella");
        this.image = imagen.img;
        let tamaño = RandomEntre(5, 20);
        this.centroX = RandomEntre(0, canvas.width);
        this.centroY = RandomEntre(0, canvas.height);
        this.rectArea = {
            x: this.centroX - tamaño/2,
            y: this.centroY - tamaño/2,
            ancho: tamaño,
            alto: tamaño
        };
        this.velocidad = RandomEntre(0, 2.2);
        this.radio = RandomEntre(0.5, 2);
        this.eliminar = false;
        this.opacidadInicial = RandomEntre(0.6, 0.9);
        this.opacidad = this.opacidadInicial;
        this.color;
        this.variacionOpacidad = 0.01;
        this.variacionOpacidadActual = 0;
        this.intervaloVariacionOpacidad = RandomEntre(0.1, 0.3);
        let aux = RandomEntre(-1, 1);
        if(aux < 0) this.variacionOpacidad *= -1;
    }
    Actualizar(){
        this.centroY += this.velocidad;
        this.variacionOpacidadActual += this.variacionOpacidad;
        if (this.variacionOpacidadActual > this.intervaloVariacionOpacidad){
            this.variacionOpacidad *= -1;
        }
        if (this.variacionOpacidadActual < -this.intervaloVariacionOpacidad){
            this.variacionOpacidad *= -1;
        }
        this.opacidad = this.opacidadInicial + this.variacionOpacidadActual;
        if (this.opacidad < 0.1) this.opacidad = 0.1;
        if (this.opacidad > 1) this.opacidad = 1;

        if (this.centroY > canvas.height){
            this.centroY = 0;
            this.centroX = RandomEntre(0, canvas.width);
            this.rectArea.x = this.centroX - this.rectArea.ancho/2;
        } 
        this.rectArea.y = this.centroY - this.rectArea.ancho/2;
    }
    Dibujar(){
        this.color = `rgba(255, 255, 255, ${this.opacidad})`;
        ctx.save();
        ctx.drawImage(this.image, this.rectArea.x, this.rectArea.y, this.rectArea.ancho, this.rectArea.alto);
        ctx.restore();
        //ctx.save();
        // ctx.beginPath();
        // ctx.shadowColor = this.color;
        // ctx.fillStyle = this.color;
        // ctx.shadowBlur = 7.5 * this.radio;
        // ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI, false);
        // ctx.fill();
        // ctx.stroke();
        //ctx.restore();
    }
}

export {EscenaFondo};