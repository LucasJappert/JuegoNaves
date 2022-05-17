
window.addEventListener('resize', function (event) {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx = canvas.getContext("2d");
    //console.log(canvas.width);
    canvasResized = true;
});