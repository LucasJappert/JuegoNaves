class EscenaUIMobile{
    constructor(){
        let tamañoCirculoGrande = 140;
        let tamañoCirculoChico = 70;
        let paddingCentro = tamañoCirculoGrande/2+10;
        this.circuloControlGrande = new Circulo("circulo", paddingCentro, canvas.height - paddingCentro, 
            tamañoCirculoGrande, tamañoCirculoGrande);
        this.circuloControlChico = new Circulo("circuloChico", paddingCentro, canvas.height - paddingCentro, 
            tamañoCirculoChico, tamañoCirculoChico);
    }
    Actualizar(){
        // this.x = this.ancho/2 + 20;
        // this.y = canvas.height - this.alto/2 - 20;
        // this.rectArea = {
        //     x: this.x - this.ancho/2,
        //     y: this.y - this.alto/2,
        //     w: this.ancho,
        //     h: this.alto
        // };
        // console.log(this.rectArea.y);
    }

    Dibujar(){
        this.circuloControlGrande.Dibujar();
        this.circuloControlChico.Dibujar();
    }
}

class Circulo{
    constructor(imagen, centroX, centroY, ancho, alto){
        var imagen = imagenes.find(item => item.src == imagen);
        this.image = imagen.img;
        this.centroX = centroX;
        this.centroY = centroY;
        this.rectArea = {
            x: centroX - ancho/2,
            y: centroY - alto/2,
            ancho: ancho,
            alto: alto
        };
        //console.log(this.rectArea);
        // this.scaleX = this.rectArea.ancho / this.image.width;
        // this.scaleY = this.rectArea.alto / this.image.height;
    }
    Actualizar(){

    }
    Dibujar(){
        ctx.save();
        ctx.drawImage(this.image, this.rectArea.x, this.rectArea.y, this.rectArea.ancho, this.rectArea.alto);
        ctx.restore();
    }
}

export { EscenaUIMobile };