import { NaveBase } from "./NaveBase.js";
import { Colision, Seno, Coseno } from "../Infraestructura/FuncionesUtiles.js";
import { TiposProyectiles, TipoProyectil } from "../Infraestructura/Enums.js";
class MiNave extends NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y) {
        super(vidaTotal, nombreImagenAvatar, x, y, false);
        this.velocidad = 3;
        this.velocidadDisparo = 10;
        this.tipoProyectil = {...TiposProyectiles[TipoProyectil.Misilesx3]};
    }

    Actualizar() {
        this.ActualizarPosicion();

        this.Disparar();

        this.ChequearImpactoDeEnemigo();

        super.Actualizar();
    }
    Dibujar() {
        super.DibujarAvatar();
    }

    ChequearImpactoDeEnemigo() {
        let enemigoMasCercano = miManagerEnemigos.ObtenerEnemigoMasCercano(this.x, this.y);
        if (enemigoMasCercano != null) {
            if (Colision(this.rectArea, enemigoMasCercano.rectArea)) {
                enemigoMasCercano.Destruir();
                this.ModificarVida(-enemigoMasCercano.dañoPorColision);
            }
        }
    }
    ActualizarPosicion(){
        this.x += this.velocidadX;
        this.y += this.velocidadY;
        this.ControlesPostMover();
    }
    ControlesPostMover(){
        if (this.x > canvas.width - this.tamañoNaveW / 2) this.x = canvas.width - this.tamañoNaveW / 2;
        if (this.x < this.tamañoNaveW / 2) this.x = this.tamañoNaveW / 2;
        if (this.y > canvas.height - this.tamañoNaveH / 2) this.y = canvas.height - this.tamañoNaveH / 2;
        if (this.y < this.tamañoNaveH / 2) this.y = this.tamañoNaveH / 2;
    }
    DetenerMovimiento(){
        this.velocidadX = 0;
        this.velocidadY = 0;
    }
    SetearVelocidadSegunAngulo(angulo){
        let porcentajeX = Coseno(angulo)/1;
        let porcentajeY = Seno(angulo)/1;
        this.velocidadX = this.velocidad * porcentajeX;
        this.velocidadY = this.velocidad * porcentajeY;
    }
}

export { MiNave };