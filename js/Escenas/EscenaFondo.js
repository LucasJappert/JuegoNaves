class EscenaFondo{
    constructor(){
    }
    Dibujar(){
        ctx.save();
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
    }
}
export {EscenaFondo};