class ComandosMobileIzquierda {
    constructor() {
        let tamañoCirculoGrande = 140;
        let tamañoCirculoChico = 70;
        let paddingCentro = tamañoCirculoGrande / 2 + 10;
        this.circuloControlGrande = new Circulo("circulo", paddingCentro, tamañoCirculoGrande, tamañoCirculoGrande);
        this.circuloControlChico = new Circulo("circuloChico", paddingCentro, tamañoCirculoChico, tamañoCirculoChico);
        this.ciculoChicoPresionado = false;
        this.punto1 = {
            x: this.circuloControlChico.centroX,
            y: this.circuloControlChico.centroY
        };
        this.punto2 = {};
        canvas.addEventListener('touchstart', (e) => {
            if (!e.touches) return;

            //console.log(e.touches);
            e.preventDefault();
            if (this.PuntoDentroDeCirculoChico(e.touches[0].clientX, e.touches[0].clientY)){
                this.ciculoChicoPresionado = true;
            }
            // console.log(e.touches[0]); 
            // console.log(e.touches[0].clientX); 
        });
        canvas.addEventListener('touchmove', (e) => {
            if (!e.touches) return;
            if(!this.ciculoChicoPresionado) return;
            this.punto2 = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
            this.circuloControlChico.ActualizarPosicionSegunAngulo(this.AnguloEntre2Puntos(this.punto1, this.punto2));
        });
        canvas.addEventListener('touchend', (e) => {
            this.ciculoChicoPresionado = false;
            this.circuloControlChico.ResetearPosicionInicial();
        });
    }
    AnguloEntre2Puntos(p1, p2){

        var angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
        return angleDeg;
    }
    PuntoDentroDeCirculoChico(x, y){
        var distancesquared = (x 
            - this.circuloControlChico.centroX) * (x - this.circuloControlChico.centroX) 
            + (y - this.circuloControlChico.centroY) * (y - this.circuloControlChico.centroY);
        return distancesquared <= (this.circuloControlChico.ancho/2) ** 2;
    }
    Actualizar() {
        // this.x = this.ancho/2 + 20;
        // this.y = canvas.height - this.alto/2 - 20;
        // this.rectArea = {
        //     x: this.x - this.ancho/2,
        //     y: this.y - this.alto/2,
        //     w: this.ancho,
        //     h: this.alto
        // };
        // console.log(this.rectArea.y);
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
    centroX = 0;
    centroY = 0;
    varX = 0;
    varY = 0;
    constructor(imagen, paddingCentro, ancho, alto) {
        this.ancho = ancho;
        this.alto = alto;
        this.radio = this.ancho/2;
        this.paddingCentro = paddingCentro;
        var imagen = imagenes.find(item => item.src == imagen);
        this.image = imagen.img;
        this.RecalcularPosicion();
        //console.log(this.rectArea);
        // this.scaleX = this.rectArea.ancho / this.image.width;
        // this.scaleY = this.rectArea.alto / this.image.height;
    }
    ResetearPosicionInicial(){
        this.varX = 0;
        this.varY = 0;
        this.RecalcularPosicion();
    }
    RecalcularPosicion() {
        this.centroX = this.varX + this.paddingCentro;
        this.centroY = this.varY + canvas.height - this.paddingCentro;
        this.rectArea = {
            x: this.centroX - this.ancho / 2,
            y: this.centroY - this.alto / 2,
            ancho: this.ancho,
            alto: this.alto
        };
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
    ActualizarPosicionSegunAngulo(angulo){
        this.varX = this.radio * Math.cos(angulo * Math.PI / 180);
        this.varY = this.radio * Math.sin(angulo * Math.PI / 180);
        this.RecalcularPosicion();
    }
}

export { ComandosMobileIzquierda };