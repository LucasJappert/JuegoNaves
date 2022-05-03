import { NaveBase } from "./NaveBase.js";
import { Colision, TipoObjeto, MilisegundosEntreFechas } from "../Utilidades/FuncionesUtiles.js";
class MiNave extends NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y) {
        super(vidaTotal, nombreImagenAvatar, x, y, false);
        this.velocidadDisparo = 500;
    }

    Actualizar() {
        this.MoverMobile();
        ["a", "s", "d", "w"].forEach(key => {
            if (TeclasPresionadas.hasOwnProperty(key)) this.Mover(key);
            if (comandosMobileIzquierda.TeclasPresionadas.hasOwnProperty(key)) this.Mover(key);
        });
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

    Mover(tecla) {
        if (tecla == "w") this.y -= this.velocidadY;
        if (tecla == "s") this.y += this.velocidadY;
        if (tecla == "a") this.x -= this.velocidadX;
        if (tecla == "d") this.x += this.velocidadX;
        this.ControlesPostMover();
    }
    MoverMobile(){
        this.y += this.velocidadY;
        this.x += this.velocidadX;
    }
    ControlesPostMover(){
        if (this.x > canvas.width - this.tamañoNaveW / 2) this.x = canvas.width - this.tamañoNaveW / 2;
        if (this.x < this.tamañoNaveW / 2) this.x = this.tamañoNaveW / 2;
        if (this.y > canvas.height - this.tamañoNaveH / 2) this.y = canvas.height - this.tamañoNaveH / 2;
        if (this.y < this.tamañoNaveH / 2) this.y = this.tamañoNaveH / 2;
    }
    SetearVelocidad2D(porcentajeX, porcentajeY){
        this.velocidadX = this.velocidad * porcentajeX;
        this.velocidadY = this.velocidad * porcentajeY;
        //console.log(this.velocidadX, this.velocidadY);
    }
}

export { MiNave };