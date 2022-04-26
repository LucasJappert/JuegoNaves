class Persona{
    constructor(){
        this.nombre = "";
        this.edad = "";
        this.dni = "";
    }

    Saludar(){
        console.log(`Hola soy ${this.nombre}`);
    }
}

var kevin = new Persona();
kevin.nombre = "Kevin";
kevin.edad = 18;
kevin.Saludar();

var lucas = new Persona();
lucas.nombre = "Lucas";
lucas.edad = 33;
lucas.Saludar();

var a = 2;
var b = 3;

//---------------

class Nave{
    constructor(){
        this.x = 0;
        this.y = 0;
        this.vida = 1000;
        this.escudo = 100;
        this.velocidad = 10;
        this.color = "#F00";
    }

    Dibujar(){

    }

}

var juegoCorriendo = true;
const principal = () => {
    console.log("principal");

    if (juegoCorriendo == true){
        setTimeout(() => {
            principal();
            juegoCorriendo = false;
        }, 1000);
    }
}

principal();


