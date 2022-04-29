class NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y, esEnemigo) {
        this.vidaTotal = vidaTotal;
        this.vidaActual = vidaTotal;
        this.x = x;
        this.y = y;
        this.velocidad = 5;
        this.scale = 0.5;
        this.rotacion = 0;
        this.ultimoDisparo = new Date();
        this.velocidadDisparo = 100;
        this.esEnemigo = esEnemigo;
        this.nombreImagenAvatar = nombreImagenAvatar;

        var imagen = imagenes.find(item => item.src == this.nombreImagenAvatar);
        this.image = imagen.img;
        this.tamañoNave = this.image.width * this.scale;
        let areaX = this.x - (this.tamañoNave / 2);
        let areaY = this.y - (this.tamañoNave / 2);
        this.rectArea = {
            x: areaX,
            y: areaY,
            w: this.tamañoNave,
            h: this.tamañoNave
        };
        this.eliminar = false;
        this.ultimoDisparo = new Date();
        this.velocidadDisparo = 100;
    }
    Actualizar() {
        this.rectArea.x = this.x - (this.tamañoNave / 2);
        this.rectArea.y = this.y - (this.tamañoNave / 2);
    }
    DibujarAvatar() {

        //if (this.rotacion >= 360) this.rotacion = 0;
        ctx.save();
        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        //ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNave, -this.tamañoNave);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.restore();
        //this.DibujarRectanguloFondo();
        this.DibujarBarraVida();
    }
    DibujarRectanguloFondo() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(this.rectArea.x, this.rectArea.y, this.rectArea.w, this.rectArea.h);
        ctx.stroke();
        ctx.restore();
    }
    DibujarBarraVida() {
        let altoBarraVida = 2;
        let paddingBarraVida = 2;
        let porcentajeVida = this.vidaActual / this.vidaTotal;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        let auxY = this.rectArea.y + this.tamañoNave;
        if (this.esEnemigo) auxY = this.rectArea.y;
        ctx.fillRect(this.rectArea.x, auxY - (altoBarraVida + paddingBarraVida * 2),
            this.rectArea.w, altoBarraVida + paddingBarraVida * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(this.rectArea.x + paddingBarraVida, auxY - (altoBarraVida + paddingBarraVida),
            (this.rectArea.w - paddingBarraVida * 2) * porcentajeVida, altoBarraVida);
        ctx.stroke();
        ctx.restore();
    }
    ImpactoProyectil(proyectil){
        this.ModificarVida(-proyectil.daño);
    }
    ModificarVida(valor){
        this.vidaActual += valor;
        if (this.vidaActual <= 0) {
            this.vidaActual = 0;
            this.eliminar = true;
        } 
        if (this.vidaActual > this.vidaTotal) this.vidaActual = vidaTotal;
    }
}

export { NaveBase };

