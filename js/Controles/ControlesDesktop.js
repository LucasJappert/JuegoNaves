import { ReiniciarJuego, Direccion } from "../Infraestructura/FuncionesUtiles.js";
class ControlesDesktop {
    constructor() {
        window.addEventListener('keydown', this.KeyDownDetectado);
        window.addEventListener('keyup', this.KeyUpDetectado);
        window.addEventListener('keypress', this.KeyPressDetectado);
        // document.addEventListener("visibilitychange", () => {
        //     if (document.hidden) {
        //         console.log('bye');
        //     } else {
        //         console.log('well back');
        //     }
        // });
        window.addEventListener('blur', () => juegoEnFoco = false);
        window.addEventListener('focus', () => juegoEnFoco = true);
        this.Direccion = Direccion.Nula;
    }

    KeyDownDetectado(evento) {
        TeclasPresionadas[evento.key] = "";
    }
    KeyUpDetectado(evento) {
        delete TeclasPresionadas[evento.key];
        let hayMovimiento = false;
        ["a", "s", "d", "w"].forEach(key => {
            if (TeclasPresionadas.hasOwnProperty(key)) {
                hayMovimiento = true;
            }
        });
        if (!hayMovimiento) miNave.DetenerMovimiento();
    }
    KeyPressDetectado(evento) {
        if (evento.key == "p") juegoEnPausa = !juegoEnPausa;
        if (evento.key == "Enter") ReiniciarJuego();
    }
    Actualizar() {
        let [arriba, derecha, abajo, izquierda] = [false, false, false, false];
        if (TeclasPresionadas.hasOwnProperty("w")) arriba = true;
        if (TeclasPresionadas.hasOwnProperty("d")) derecha = true;
        if (TeclasPresionadas.hasOwnProperty("s")) abajo = true;
        if (TeclasPresionadas.hasOwnProperty("a")) izquierda = true;

        if ([arriba, derecha, abajo, izquierda].every((e) => e == false)) {
            this.Direccion = Direccion.Nula;
            return;
        }

        if (arriba && abajo) [arriba, abajo] = [false, false];
        if (derecha && izquierda) [derecha, izquierda] = [false, false];

        if (arriba && derecha) this.Direccion = Direccion.ArribaDerecha;
        else if (abajo && derecha) this.Direccion = Direccion.AbajoDerecha;
        else if (abajo && izquierda) this.Direccion = Direccion.AbajoIzquierda;
        else if (arriba && izquierda) this.Direccion = Direccion.ArribaIzquierda;
        else if (arriba) this.Direccion = Direccion.Arriba;
        else if (derecha) this.Direccion = Direccion.Derecha;
        else if (abajo) this.Direccion = Direccion.Abajo;
        else if (izquierda) this.Direccion = Direccion.Izquierda;

        if (this.Direccion != Direccion.Nula) miNave.SetearVelocidadSegunAngulo(this.Direccion);
    }

}

export { ControlesDesktop };