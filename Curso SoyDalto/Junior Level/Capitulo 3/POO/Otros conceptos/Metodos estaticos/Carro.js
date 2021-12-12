class Carro {
    constructor(modelo, marca, color, condicion, año) {
        this.modelo = modelo;
        this.marca = marca;
        this.color = color;
        this.condicion = condicion;
        this.año = año;
    }

    static encenderCarro() {
        return true;
    }
}

// Basicamente los metodos static son para cuando se quieren agregar funcionalidades que permitan que sean
// accedidas sin la necesidad de crear un objeto de su clase.