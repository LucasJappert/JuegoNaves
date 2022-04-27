import Explosion from "./Explosion.js";
export default class ManagerExplosiones{
    constructor(){
        this.explosiones = [];
    }
    
    Actualizar(){
        var i = this.explosiones.length;
        while(i--) {
            this.explosiones[i].Actualizar();
            if (this.explosiones[i].eliminar) this.explosiones.splice(i, 1);
        }
    }
    Dibujar(){
        this.explosiones.forEach(explosion => {
            explosion.Dibujar();
        });
    }
    CrearExplosion(posX, posY){
        let explosion = new Explosion(posX, posY);
        this.explosiones.push(explosion);
    }
}