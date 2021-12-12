// import '../Herencia/Personaje'

class Duende extends Personaje {
    constructor(nombre, sexo, edad, raza, maldad) {
        super(nombre, sexo, edad, raza);
        this.maldad = maldad;
    }
}