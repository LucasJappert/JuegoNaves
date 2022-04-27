export default class Enemigo{
    constructor(){
        this.velocidad = Math.random() * 2 + 0.5;
        this.scale = 0.5;
        this.puntajeAlMorir = 20;
        this.x = Math.round(Math.random() * canvas.width);
        this.dañoPorColision = 10;

        let src = `../imagenes/enemy${Math.floor(Math.random() * 6) + 1}.png`;
        var itemImagen = imagenes.find(item => item.src == src);
        this.image = itemImagen.img;

        this.tamañoNave = this.image.width * this.scale;
        this.y = 0 - this.tamañoNave/2;
        let areaX = this.x - (this.tamañoNave * this.scale / 2);
        let areaY = this.y - (this.tamañoNave * this.scale / 2);
        this.rectArea = {
            x: areaX, 
            y: areaY,  
            w: this.tamañoNave, 
            h: this.tamañoNave
        };
        this.eliminar = false;
    }
    Actualizar() {
        this.y += this.velocidad;
        this.rectArea.x = this.x - (this.tamañoNave * this.scale / 2);
        this.rectArea.y = this.y - (this.tamañoNave * this.scale / 2);
        if (this.y > canvas.height + this.tamañoNave/2) this.eliminar = true;
    }
    Dibujar(){
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
    Destruir(){
        this.eliminar = true;
        miManagerExplosiones.CrearExplosion(this.x, this.y);
        puntajeTotal += this.puntajeAlMorir;
    }
}