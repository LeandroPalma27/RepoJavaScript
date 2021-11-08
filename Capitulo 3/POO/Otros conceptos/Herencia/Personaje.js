class Personaje {
    constructor(nombre, sexo, edad, raza) {
        this.nombre = nombre;
        this.sexo = sexo;
        this.edad = edad;
        this.raza = raza;
    }
    verInfo() {
        if (this.raza == 'duende') {
            return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Edad: ${this.edad}, Raza: ${this.raza}`;
        } else {
            return `Nombre: ${this.nombre}, Sexo: ${this.sexo}, Edad: ${this.edad}`;
        }
    }
}