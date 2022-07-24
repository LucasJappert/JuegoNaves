import { MilisegundosEntreFechas, FinalizarJuego, TipoObjeto } 
    from "../Infraestructura/FuncionesUtiles.js";
import { TiposProyectiles } from "../Infraestructura/Enums.js";
class NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y, esEnemigo) {
        this.tipoProyectil = null;
        this.vidaTotal = vidaTotal;
        this.vidaActual = vidaTotal;
        this.x = x;
        this.y = y;
        this.velocidadX = 0;
        this.velocidadY = 0;
        this.velocidad = 4;
        this.scale = 0.5;
        this.rotacion = 0;
        this.velocidadDisparo = 100;
        this.esEnemigo = esEnemigo;
        this.nombreImagenAvatar = nombreImagenAvatar;

        var imagen = imagenes.find(item => item.src == this.nombreImagenAvatar);
        this.image = imagen.img;
        this.tamañoNaveW = this.image.width * this.scale;
        this.tamañoNaveH = this.image.height * this.scale;
        let areaX = this.x - (this.tamañoNaveW / 2);
        let areaY = this.y - (this.tamañoNaveH / 2);
        this.rectArea = {
            x: areaX,
            y: areaY,
            ancho: this.tamañoNaveW,
            alto: this.tamañoNaveH
        };
        this.eliminar = false;
        this.ultimoDisparo = new Date(0);
        this.ultimoDañoRecibido = new Date(0);
        this.velocidadDisparo = 100;
    }
    Actualizar() {
        this.rectArea.x = this.x - (this.tamañoNaveW / 2);
        this.rectArea.y = this.y - (this.tamañoNaveH / 2);
    }
    DibujarAvatar() {

        //if (this.rotacion >= 360) this.rotacion = 0;
        ctx.save();
        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        //ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNaveW, -this.tamañoNaveH);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.restore();
        //this.DibujarRectanguloFondo();
        this.DibujarBarraVida();
    }
    DibujarRectanguloFondo() {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        ctx.fillRect(this.rectArea.x, this.rectArea.y, this.rectArea.ancho, this.rectArea.alto);
        ctx.stroke();
        ctx.restore();
    }
    DibujarBarraVida() {
        let milisegundos = MilisegundosEntreFechas(new Date(), this.ultimoDañoRecibido);
        if (milisegundos > 4000) return;
        
        let altoBarraVida = 2;
        let paddingBarraVida = 2;
        let porcentajeVida = this.vidaActual / this.vidaTotal;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        let auxY = this.rectArea.y + this.tamañoNaveH;
        let anchoBarra = 64;
        if (this.esEnemigo) auxY = this.rectArea.y;
        ctx.fillRect(this.x - anchoBarra/2, auxY - (altoBarraVida + paddingBarraVida * 2),
                    anchoBarra, altoBarraVida + paddingBarraVida * 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(this.x - anchoBarra/2 + paddingBarraVida, auxY - (altoBarraVida + paddingBarraVida),
                    (anchoBarra - paddingBarraVida * 2) * porcentajeVida, altoBarraVida);
        ctx.stroke();
        ctx.restore();
    }
    ImpactoProyectil(proyectil){
        this.ModificarVida(-proyectil.daño);
    }
    ModificarVida(valor){
        if(valor < 0) {
            this.ultimoDañoRecibido = new Date();
        }
        this.vidaActual += valor;
        if (this.vidaActual <= 0) {
            this.vidaActual = 0;
            this.eliminar = true;
            if (this.esEnemigo == false) {
                FinalizarJuego();
            }
        } 
        if (this.vidaActual > this.vidaTotal) this.vidaActual = vidaTotal;
    }
    Disparar() {
        if (this.tipoProyectil == null) return;

        let milisegundos = MilisegundosEntreFechas(new Date(), this.ultimoDisparo);
        if (milisegundos < this.tipoProyectil.intervaloDisparo) return;
        
        this.ultimoDisparo = new Date();

        if (this.tipoProyectil.id == TiposProyectiles[1].id){
            this.EjecutarDisparo1();
        }
        if (this.tipoProyectil.id == TiposProyectiles[2].id){
            this.EjecutarDisparo2();
        }
    }
    EjecutarDisparo1(){
        miManagerProyectiles.AgregarProyectil(this.x, this.y - this.tamañoNaveH / 2, TipoObjeto.Jugador, this.tipoProyectil);
    }
    EjecutarDisparo2(){
        miManagerProyectiles.AgregarProyectil(this.x, this.y - this.tamañoNaveH / 2, TipoObjeto.Jugador, this.tipoProyectil);
        miManagerProyectiles.AgregarProyectil(this.x - 20, this.y - this.tamañoNaveH / 2, TipoObjeto.Jugador, this.tipoProyectil);
        miManagerProyectiles.AgregarProyectil(this.x + 20, this.y - this.tamañoNaveH / 2, TipoObjeto.Jugador, this.tipoProyectil);
    }
}

export { NaveBase };

