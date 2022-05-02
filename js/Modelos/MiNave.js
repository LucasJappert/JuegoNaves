import { NaveBase } from "./NaveBase.js";
import { Colision, TipoObjeto, MilisegundosEntreFechas } from "../Utilidades/FuncionesUtiles.js";
class MiNave extends NaveBase {
    constructor(vidaTotal, nombreImagenAvatar, x, y) {
        super(vidaTotal, nombreImagenAvatar, x, y, false);
        this.velocidadDisparo = 500;
    }

    Actualizar() {
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
        if (tecla == "w") this.y -= this.velocidad;
        if (tecla == "s") this.y += this.velocidad;
        if (tecla == "a") this.x -= this.velocidad;
        if (tecla == "d") this.x += this.velocidad;

        if (this.x > canvas.width - this.tamañoNaveW / 2) this.x = canvas.width - this.tamañoNaveW / 2;
        if (this.x < this.tamañoNaveW / 2) this.x = this.tamañoNaveW / 2;
        if (this.y > canvas.height - this.tamañoNaveH / 2) this.y = canvas.height - this.tamañoNaveH / 2;
        if (this.y < this.tamañoNaveH / 2) this.y = this.tamañoNaveH / 2;
    }
}

export { MiNave };