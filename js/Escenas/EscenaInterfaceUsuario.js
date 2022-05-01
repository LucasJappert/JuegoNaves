class EscenaInterfaceUsuario {
    constructor() {
        this.fps = 0;
        this.contadorFPS = 0;
        this.ultimaMedicionFPS = new Date();
    }
    Dibujar() {
        this.contadorFPS += 1;
        if (new Date().getTime() - this.ultimaMedicionFPS.getTime() > 1000) {
            this.fps = this.contadorFPS;
            this.contadorFPS = 0;
            this.ultimaMedicionFPS = new Date();
        }

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
export { EscenaInterfaceUsuario };