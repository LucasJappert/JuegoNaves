
class Nave{
    constructor(posX, posY, ctx){
        this.x = posX;
        this.y = posY;
        this.velocidad = 10;
        this.ctx = ctx;
    }

    Mover(tecla){
        if (tecla == "w"){
            this.y -= this.velocidad; return;
        }
        if(tecla == "s"){
            this.y += this.velocidad; return;
        }
        if(tecla == "a"){
            this.x -= this.velocidad; return;
        }
        if(tecla == "d"){
            this.x += this.velocidad; return;
        }
    }
    Dibujar(ctx){
        this.ctx.beginPath();
        this.ctx.fillStyle = "rgba(255, 0, 0, 1)";
        this.ctx.arc(this.x, this.y, 20, 0, 2*Math.PI);
        this.ctx.fill();
    }
}



export {Nave};