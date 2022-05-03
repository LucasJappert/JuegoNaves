import { NaveBase } from "./NaveBase.js";
import { Colision, TipoObjeto, MilisegundosEntreFechas, Seno, Coseno } from "../Utilidades/FuncionesUtiles.js";
class MiNave extends NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y) {
        super(vidaTotal, nombreImagenAvatar, x, y, false);
        this.velocidadDisparo = 500;
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

    Disparar() {
        let milisegundos = MilisegundosEntreFechas(new Date(), this.ultimoDisparo);
        if (milisegundos < this.velocidadDisparo) return;

        this.ultimoDisparo = new Date();
        miManagerProyectiles.AgregarProyectil(this.x, this.y - this.tamañoNaveH / 2, TipoObjeto.Jugador);
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