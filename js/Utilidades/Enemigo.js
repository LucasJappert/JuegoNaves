export default class Enemigo{
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.velocidad = 1;
        var img = new Image();
        img.src = `../imagenes/enemy${Math.floor(Math.random() * 6) + 1}.png`;
        this.image = img;
        this.tamañoNave = this.image.width;
        this.eliminar = false;
        this.x = Math.round(Math.random() * this.canvas.width);
        this.y = 0 - this.tamañoNave/2;
        this.scale = 0.5;
    }
    Actualizar(){
        this.y += this.velocidad;
        if (this.y > this.canvas.height + this.tamañoNave/2) this.eliminar = true;
    }
    Dibujar(){
        let ctx = this.ctx;

        ctx.setTransform(this.scale, 0, 0, this.scale, this.x, this.y); // sets scales and origin
        //ctx.rotate(this.rotacion * Math.PI/180);
        ctx.drawImage(this.image, -this.tamañoNave/2, -this.tamañoNave/2);
        ctx.setTransform(1,0,0,1,0,0);
    }
}