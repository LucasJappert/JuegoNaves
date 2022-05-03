var TeclasPresionadas = {};

var canvas = document.getElementById("micanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
var limiteEnemigos = 10;
var juegoEnPausa = false;
var juegoFinalizado = false;
var puntajeTotal = 0;

var imagenes = [];
var canvasResized = true;

var miNave;
var miManagerEnemigos;
var miManagerExplosiones;
var miManagerProyectiles;
var controlesMobileIzquierda;
var controlesDesktop;

