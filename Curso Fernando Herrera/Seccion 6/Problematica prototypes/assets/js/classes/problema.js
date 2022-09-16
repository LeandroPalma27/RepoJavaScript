const leandro = {
    nombre: 'Leandro',
    apellido: 'Palma',
    edad: 20,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

/* const cristiano = {
    nombre: 'Cristiano',
    apellido: 'Ronaldo',
    edad: 36,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
    }
}

const messi = {
    nombre: 'Lionel',
    apellido: 'Messi',
    edad: 34,
    imprimir() {
        console.log(`Nombre: ${this.nombre}`);
    }
} */

// Una manera de corregir la problematica del tener que crear un objeto repetido por cada instancia reque_
// rida, es la siguiente (manera clasica):

function Futbolistas(nombre, apellido, edad) {

    // Se ocupa la palabra reservada 'this':
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.imprimir = function () {
        console.log(`Nombre: ${this.nombre} - apellido: ${this.apellido}`);
    }

}

const cristiano = new Futbolistas('Cristiano', 'Ronaldo', 36); // Requiere la palabra reservada 'new'
const messi = new Futbolistas('Lionel', 'Messi', 34);

console.log(cristiano.imprimir());

// Pero ahora surge otro problema, y es que si no documentamos que esa funcion sirve para hacer instancia
// de algo, puede ser algo confuso para otros desarrolladores.

console.log(cristiano)