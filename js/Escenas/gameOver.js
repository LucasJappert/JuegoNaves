const DibujarEscenaGameOver = (ctx) => {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = '#0F0';
    ctx.font = "bold 80px Segoe UI";
    ctx.textAlign = "center";
    ctx.shadowColor="#0F0";
    ctx.shadowBlur=20;
    ctx.lineWidth=2;
    ctx.fillText(`GAME OVER`, innerWidth/2, innerHeight/2);
    ctx.strokeText(`GAME OVER`, innerWidth/2, innerHeight/2);
    ctx.font = "40px Segoe UI";
    ctx.fillText(`PUNTAJE: ${puntajeTotal}`, innerWidth/2, innerHeight/2+ 60);
    ctx.fillStyle = '#999';
    ctx.shadowColor="#FFF";
    ctx.fillText(`Presiona Enter para volver a intentarlo!`, innerWidth/2, innerHeight/2+ 120);
    ctx.restore();
}

export {DibujarEscenaGameOver};