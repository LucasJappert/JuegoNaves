class EscenaInterfaceUsuario{
    constructor(ctx){
        this.ctx = ctx;
        this.fps;
        this.times = [0];
    }
    Dibujar(timestamp){
        while (this.times.length > 0 && this.times[0] <= timestamp - 1000) {
            this.times.shift();
        }
        this.times.push(timestamp);
        this.fps = this.times.length;

        let ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = 'white';
        ctx.font = "18px arial";
        ctx.fillText(`FPS: ${this.fps}`, 5, 20);
        ctx.fillText(`PUNTAJE: ${puntajeTotal}`, 5, 40);
        ctx.fillText(`VIDA ACTUAL: ${miNave.vidaActual}`, 5, 60);
        ctx.restore();
    }
}
export {EscenaInterfaceUsuario};