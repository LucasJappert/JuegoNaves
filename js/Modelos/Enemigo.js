import { NaveBase } from "./NaveBase.js";
class Enemigo extends NaveBase{
    constructor(vidaTotal, nombreImagenAvatar, x, y){
        super(vidaTotal, nombreImagenAvatar, x, y, true);
        this.velocidad = Math.random() * 2 + 0.5;
        this.puntajeAlMorir = 20;
        this.dañoPorColision = 10;
    }
    Actualizar() {
        this.y += this.velocidad;

        if (this.y > canvas.height + this.tamañoNaveH/2) this.eliminar = true;
        
        super.Actualizar();
    }
    Dibujar(){
        super.DibujarAvatar();
    }
    Destruir(){
        this.eliminar = true;
        miManagerExplosiones.CrearExplosion(this.x, this.y);
    }
    ImpactoProyectil(proyectil){
        super.ImpactoProyectil(proyectil);
        if(this.eliminar){
            this.Destruir();
            puntajeTotal += this.puntajeAlMorir;
        }
    }
}

export { Enemigo }; 