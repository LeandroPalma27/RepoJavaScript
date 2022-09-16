class Persona {

    #nombre;
    #edad;
    #apellidos;
    #escuela;

    constructor(nombre, edad, apellidos, escuela) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidos = apellidos;
        this.escuela = escuela;
    }

    get getNombre() {return this.nombre}
    get getEdad() {return this.edad}
    get getApellidos() {return this.apellidos}
    get getEscuela() {return this.escuela}

    set setNombre(nombre) {
        this.nombre = nombre;
    }
    set setEdad(edad) {
        this.edad = edad;
    }
    set setApellidos(apellidos) {
        this.apellidos = apellidos;
    }
    set setEscuela(escuela) {
        this.escuela = escuela;
    }

}

const persona = new Persona("Leandro", 21, "Palma Alvarado", "Informatica");
console.log(persona)

const {nombre: nombrePersona} = persona;

console.log({nombrePersona})