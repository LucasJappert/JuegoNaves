const TiposProyectiles = {
    1: {
        id: 1,
        dañoProvocado: 30,
        nombreImagen: "proyectil1",
        anchoImagen: 10,
        velocidad: {
            x: 0, 
            y: -5
        },
        intervaloDisparo: 100
    },
    2: {
        id: 2,
        dañoProvocado: 40,
        nombreImagen: "proyectil2",
        anchoImagen: 30,
        velocidad: {
            x: 0, 
            y: -5
        },
        intervaloDisparo: 200 
    }
}

const TipoProyectil = {
    Laser: 1,
    Misilesx3: 2,
}
export { TiposProyectiles, TipoProyectil };

