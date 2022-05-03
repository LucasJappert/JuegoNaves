import { AnguloEntre2Puntos } from "../Utilidades/FuncionesUtiles.js";
class ComandosMobileIzquierda {
    constructor() {
        this.TeclasPresionadas = {};
        let tamañoCirculoGrande = 140;
        let tamañoCirculoChico = 70;
        let paddingCentro = tamañoCirculoGrande / 2 + 10;
        this.circuloControlGrande = new Circulo("circulo", paddingCentro, tamañoCirculoGrande, tamañoCirculoGrande);
        this.circuloControlChico = new Circulo("circuloChico", paddingCentro, tamañoCirculoChico, tamañoCirculoChico);
        canvas.addEventListener('touchstart', (e) => {
            if (!e.touches) return;

            //console.log(e.touches);
            e.preventDefault();
            if (this.PuntoDentroDeCirculoChico(e.touches[0].clientX, e.touches[0].clientY)) {
                this.circuloControlChico.SetearPresionado(true);
            }
        });
        canvas.addEventListener('touchmove', (e) => {
            if (!e.touches) return;
            if (this.circuloControlChico.presionado == false) return;
            let punto2 = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
            this.circuloControlChico.CalcularMovimiento(punto2);
        });

        canvas.addEventListener('touchend', (e) => {
            this.circuloControlChico.SetearPresionado(false);
            this.circuloControlChico.ResetearPosicionInicial();
            this.TeclasPresionadas = {};
            miNave.SetearVelocidad2D(0, 0);
        });
    }
    CalcularMovimientoSegunAngulo(angulo) {
        this.TeclasPresionadas = {};
        if (angulo > -22.5 && angulo <= 22.5) {
            this.TeclasPresionadas["d"] = "";
        }
        if (angulo > 22.5 && angulo <= 67.5) {
            this.TeclasPresionadas["d"] = "";
            this.TeclasPresionadas["s"] = "";
        }
        if (angulo > 67.5 && angulo <= 112.5) {
            this.TeclasPresionadas["s"] = "";
        }
        if (angulo > 112.5 && angulo <= 157.5) {
            this.TeclasPresionadas["s"] = "";
            this.TeclasPresionadas["a"] = "";
        }
        if (angulo > 157.5 && angulo <= 180) {
            this.TeclasPresionadas["a"] = "";
        }
        if (angulo >= -180 && angulo <= -157.5) {
            this.TeclasPresionadas["a"] = "";
        }
        if (angulo >= -157 && angulo <= -112.5) {
            this.TeclasPresionadas["a"] = "";
            this.TeclasPresionadas["w"] = "";
        }
        if (angulo >= -112 && angulo <= -67.5) {
            this.TeclasPresionadas["w"] = "";
        }
        if (angulo >= -67 && angulo <= -22.5) {
            this.TeclasPresionadas["w"] = "";
            this.TeclasPresionadas["d"] = "";
        }
    }
    PuntoDentroDeCirculoChico(x, y) {
        var distancesquared = (x
            - this.circuloControlChico.centro.x) * (x - this.circuloControlChico.centro.x)
            + (y - this.circuloControlChico.centro.y) * (y - this.circuloControlChico.centro.y);
        return distancesquared <= (this.circuloControlChico.ancho / 2) ** 2;
    }
    Actualizar() {
        if (canvasResized) this.CanvasResized();
    }
    CanvasResized() {
        this.circuloControlGrande.CanvasResized();
        this.circuloControlChico.CanvasResized();
    }

    Dibujar() {
        this.circuloControlGrande.Dibujar();
        this.circuloControlChico.Dibujar();
    }
}

class Circulo {
    centroInicial = {
        x: 0,
        y: 0
    };
    centro = {
        x: 0,
        y: 0
    };
    varX = 0;
    varY = 0;
    presionado = false;
    constructor(imagen, paddingCentro, ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
        this.radio = this.ancho / 2;
        this.paddingCentro = paddingCentro;
        var imagen = imagenes.find(item => item.src == imagen);
        this.image = imagen.img;
        this.RecalcularPosicion();
    }
    SetearPresionado(presionado){
        this.presionado = presionado;
    }
    ResetearPosicionInicial() {
        this.varX = 0;
        this.varY = 0;
        this.RecalcularPosicion();
    }
    RecalcularPosicion() {
        this.centroInicial.x = this.paddingCentro;
        this.centroInicial.y = canvas.height - this.paddingCentro;
        this.centro.x = this.centroInicial.x + this.varX;
        this.centro.y = this.centroInicial.y + this.varY;
        this.rectArea = {
            x: this.centro.x - this.radio,
            y: this.centro.y - this.radio,
            ancho: this.ancho,
            alto: this.alto
        };
    }
    CalcularMovimiento(punto2) {
        let distanciaDesdeElCentro = Math.hypot(punto2.x - this.centroInicial.x, punto2.y - this.centroInicial.y);
        if (distanciaDesdeElCentro < this.radio * 0.4) {
            this.ResetearPosicionInicial();
            return;
        }
        if (distanciaDesdeElCentro > this.radio) {

        }
        let angulo = AnguloEntre2Puntos(this.centroInicial, punto2);
        this.ActualizarPosicionSegunAngulo(angulo);
        miNave.SetearVelocidad2D(this.varX/this.radio, this.varY/this.radio);
    }
    CanvasResized() {
        this.RecalcularPosicion();
    }
    Dibujar() {
        ctx.save();
        ctx.drawImage(this.image, this.rectArea.x, this.rectArea.y, this.rectArea.ancho, this.rectArea.alto);
        ctx.restore();
    }
    /**
      @param {angulo}
      - Cuadrante 1: de -180 a -90
      - Cuadrante 2: de -90 a -0
      - Cuadrante 3: de 0 a 90
      - Cuadrante 4: de 90 a 180
     **/
    ActualizarPosicionSegunAngulo(angulo) {
        this.varX = this.radio * Math.cos(angulo * Math.PI / 180);
        this.varY = this.radio * Math.sin(angulo * Math.PI / 180);
        this.RecalcularPosicion();
    }
}

export { ComandosMobileIzquierda };