export default class Enemigo{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.velocidad = Math.random() * 2 + 0.5;
        this.scale = 0.5;
        this.puntajeAlMorir = 20;
        this.x = Math.round(Math.random() * this.canvas.width);
        var img = new Image();
        img.src = `../imagenes/enemy${Math.floor(Math.random() * 6) + 1}.png`;
        img.onload = () => {
            this.image = img;
            this.tamañoNave = img.width * this.scale;
            this.y = 0 - this.tamañoNave/2;
            let areaX = this.x - (this.tamañoNave * this.scale / 2);
            let areaY = this.y - (this.tamañoNave * this.scale / 2);
            this.rectArea = {
                x: areaX, 
                y: areaY,  
                w: this.tamañoNave, 
                h: this.tamañoNave
            };
            this.cargaLista = true;
        };
        this.eliminar = false;
        this.cargaLista = false;
    }
    Actualizar() {
        if (!this.cargaLista) return;
        this.y += this.velocidad;
        this.rectArea.x = this.x - (this.tamañoNave * this.scale / 2);
        this.rectArea.y = this.y - (this.tamañoNave * this.scale / 2);
        if (this.y > this.canvas.height + this.tamañoNave/2) this.eliminar = true;
    }
    Dibujar(){
        if (!this.cargaLista) return;
        let ctx = this.ctx;

        //dibuja fondo cuadrado blanco
        // ctx.beginPath();
        // ctx.fillStyle = 'rgba(255, 255, 255, 1)';
        // ctx.fillRect(this.rectArea.x, this.rectArea.y, this.rectArea.w, this.rectArea.h);
        // ctx.stroke();

        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        //ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNave/2, -this.tamañoNave/2);
        ctx.setTransform(1,0,0,1,0,0);

    }
}