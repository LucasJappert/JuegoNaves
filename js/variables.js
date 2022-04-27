var TeclasPresionadas = {};

var canvas = document.getElementById("micanvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
var ctx = canvas.getContext("2d");
var limiteEnemigos = 100;
var juegoEnPausa = false;
var puntajeTotal = 0;

var miManagerEnemigos;
var miManagerExplosiones;