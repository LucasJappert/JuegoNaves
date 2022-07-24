import { Colision, TipoObjeto } from "../Infraestructura/FuncionesUtiles.js";
export default class Proyectil {
    constructor(x, y, objectoCaster, tipoProyectil) {
        var imagen = imagenes.find(item => item.src == tipoProyectil.nombreImagen);
        this.image = imagen.img;
        let ancho = tipoProyectil.anchoImagen;
        this.scale = ancho / this.image.width;
        this.tamañoX = ancho;
        this.tamañoY = Math.round((this.image.height * this.scale).toFixed(2));
        this.posInicialX = x;
        this.posInicialY = y;
        this.x = x;
        this.y = y;
        this.rotacion = 0;

        this.velocidadX = tipoProyectil.velocidad.x;
        this.velocidadY = tipoProyectil.velocidad.y;
        this.eliminar = false;
        this.objectoCaster = objectoCaster;
        this.daño = tipoProyectil.dañoProvocado;
        this.Actualizar();
    }
    Actualizar() {
        this.x += this.velocidadX;
        this.y += this.velocidadY;
        this.rectArea = {
            x: this.x - this.tamañoX / 2,
            y: this.y - this.tamañoY / 2,
            ancho: this.tamañoX,
            alto: this.tamañoY
        };

        if (this.y < 0) this.eliminar = true;
        if (this.objectoCaster = TipoObjeto.Jugador) {
            this.ChequearImpactoSobreEnemigo();
        }
    }
    Dibujar() {

        //if (this.rotacion >= 360) this.rotacion = 0;
        ctx.save();
        ctx.setTransform(this.scale, 0, 0, this.scale, this.rectArea.x, this.rectArea.y); // sets scales and origin
        ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, 0, 0);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.restore();
    }
    // SetearVelocidadesXeY(distanciaX, distanciaY){
    //     let porcentajeX = Coseno(angulo)/1;
    //     let porcentajeY = Seno(angulo)/1;
    //     this.velocidadX = this.velocidad * porcentajeX;
    //     this.velocidadY = this.velocidad * porcentajeY;
    // }
    ChequearImpactoSobreEnemigo() {
        let enemigoMasCercano = miManagerEnemigos.ObtenerEnemigoMasCercano(this.x, this.y);
        if (enemigoMasCercano != null) {
            //console.log(this.rectArea, enemigoMasCercano.rectArea)
            if (Colision(this.rectArea, enemigoMasCercano.rectArea)) {
                this.eliminar = true;
                enemigoMasCercano.ImpactoProyectil(this);
            }
        }
    }
}