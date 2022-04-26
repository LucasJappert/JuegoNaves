window.addEventListener('keydown', KeyDownDetectado);
window.addEventListener('keyup', KeyUpDetectado);

function KeyDownDetectado(evento) {
    TeclasPresionadas[evento.key] = "";
}
function KeyUpDetectado(evento) {
    delete TeclasPresionadas[evento.key];
}