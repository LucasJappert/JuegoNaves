import { ReiniciarJuego } from "../Utilidades/FuncionesUtiles.js";

// window.addEventListener('keydown', KeyDownDetectado);
// window.addEventListener('keyup', KeyUpDetectado);
// window.addEventListener('keypress', KeyPressDetectado);
// canvas.addEventListener('mousedown', MouseDownDetectado);

// canvas.addEventListener('mousemove', CalcularDireccion());
// canvas.addEventListener('touchmove', CalcularDireccion());


//canvas.addEventListener('mousedown', CalcularDireccion());
// canvas.addEventListener('mouseup', released);

// canvas.addEventListener('touchstart', setPosition);
// canvas.addEventListener('touchend', released);
let lastX, lastY = [canvas.width/2, canvas.height/2];
let direccion = "";
canvas.onmousemove = function(e){
    // console.log(lastX, lastY);
    // console.log(e.clientX, e.clientY);
    lastX = e.clientX;
    lastY = e.clientY;
}
canvas.onmousedown = function(e){
    dragOffset.x = e.x - mainLayer.trans.x;
    dragOffset.y = e.y - mainLayer.trans.y;

    mouseIsDown = true;
}
canvas.onmouseup = function(e){
    if(mouseIsDown) mouseClick(e);

    mouseIsDown = false;
}

// Set up touch events for mobile, etc
// canvas.addEventListener("touchstart", function (e) {
//     mousePos = getTouchPos(canvas, e);
// var touch = e.touches[0];
// var mouseEvent = new MouseEvent("mousedown", {
// clientX: touch.clientX,
// clientY: touch.clientY
// });
// canvas.dispatchEvent(mouseEvent);
// }, false);
// canvas.addEventListener("touchend", function (e) {
// var mouseEvent = new MouseEvent("mouseup", {});
// canvas.dispatchEvent(mouseEvent);
// }, false);
// canvas.addEventListener("touchmove", function (e) {
// var touch = e.touches[0];
// var mouseEvent = new MouseEvent("mousemove", {
// clientX: touch.clientX,
// clientY: touch.clientY
// });
// canvas.dispatchEvent(mouseEvent);
// }, false);

// function CalcularDireccion(evento) {
//     console.log(evento);
// }

function MouseDownDetectado(evento) {
    // console.log(evento.clientX, evento.clientY);
    // miManagerExplosiones.CrearExplosion(evento.clientX, evento.clientY);
}