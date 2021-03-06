import Proyectil from "../Modelos/Proyectil.js";
export default class ManagerProyectiles{
    constructor(){
        this.proyectiles = [];
    }
    
    Actualizar(){
        var i = this.proyectiles.length;
        while(i--) {
            this.proyectiles[i].Actualizar();
            if (this.proyectiles[i].eliminar) this.proyectiles.splice(i, 1);
        }
    }
    Dibujar(){
        this.proyectiles.forEach(proyectil => {
            proyectil.Dibujar();
        });
    }
    AgregarProyectil(x, y, disparadoPor, tipoProyectil){
        let nuevoProyectil = new Proyectil(x, y, disparadoPor, tipoProyectil);
        this.proyectiles.push(nuevoProyectil);
    }
}
