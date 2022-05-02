import { ReiniciarJuego } from "../Utilidades/FuncionesUtiles.js";

// window.addEventListener('keydown', KeyDownDetectado);
// window.addEventListener('keyup', KeyUpDetectado);
// window.addEventListener('keypress', KeyPressDetectado);
// canvas.addEventListener('mousedown', MouseDownDetectado);

// canvas.addEventListener('mousemove', CalcularDireccion());


//canvas.addEventListener('mousedown', CalcularDireccion());
// canvas.addEventListener('mouseup', released);

// canvas.addEventListener('touchstart', setPosition);
// canvas.addEventListener('touchmove', CalcularDireccion());
// canvas.addEventListener('touchend', released);
let lastX, lastY = [canvas.width/2, canvas.height/2];
let direccion = "";
let mouseIsDown = false;
canvas.onmousemove = function(e){
    // // console.log(lastX, lastY);
    // // console.log(e.clientX, e.clientY);
    // if (mouseIsDown == false) return;

    // TeclasPresionadas = {};
    // if(e.clientX > lastX) MoverDerecha();
    // if(e.clientX < lastX) MoverIzquierda();
    // if(e.clientY > lastY) MoverAbajo();
    // if(e.clientY < lastY) MoverArriba();
    // //console.log(TeclasPresionadas);
    // lastX = e.clientX;
    // lastY = e.clientY;
}
canvas.onmousedown = function(evento){
    mouseIsDown = true;
}
canvas.onmouseup = function(e){
    //TeclasPresionadas = {};
    mouseIsDown = false;
}

function MoverDerecha(){
    delete TeclasPresionadas["a"];
    TeclasPresionadas["d"] = "d";
}
function MoverIzquierda(){
    delete TeclasPresionadas["d"];
    TeclasPresionadas["a"] = "a";
}
function MoverAbajo(){
    delete TeclasPresionadas["w"];
    TeclasPresionadas["s"] = "s";
}
function MoverArriba(){
    delete TeclasPresionadas["s"];
    TeclasPresionadas["w"] = "w";
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