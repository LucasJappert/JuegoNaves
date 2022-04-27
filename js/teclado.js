window.addEventListener('keydown', KeyDownDetectado);
window.addEventListener('keyup', KeyUpDetectado);
window.addEventListener('keypress', KeyPressDetectado);
canvas.addEventListener('mousedown', MouseDownDetectado);

function KeyDownDetectado(evento) {
    TeclasPresionadas[evento.key] = "";
}
function KeyUpDetectado(evento) {
    delete TeclasPresionadas[evento.key];
}
function KeyPressDetectado(evento) {
    if (evento.key == "p") juegoEnPausa = !juegoEnPausa;
}
function MouseDownDetectado(evento) {
    // console.log(evento.clientX, evento.clientY);
    // miManagerExplosiones.CrearExplosion(evento.clientX, evento.clientY);
}