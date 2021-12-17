// Paso por valores:

let a = 10; // Se asigna 10.
let b = a; // Se le asigna el valor de a.

a = 20;
console.log({a, b});

// Paso por referencia:

const A = {valor: 10}; // Se asigna este objeto.
const B = {A}; // Se pasa por referencia al mismo objeto, a la variable a.

B.valor = 30; // Al modificar a la referencia del objeto(al mismo objeto a), se modifica no solo
             // b, tambien se modifica a.
console.log({A, B});


/* const messi = {nombre: 'Messi'};
const cambiarNombre = (personaje) => {
    personaje.nombre = 'Cristiano';
    return personaje;
};
let resultado = cambiarNombre(messi);

console.log({messi, resultado}) */

// Si queremos evitar que se modifique:

const messi = {nombre: 'Messi'};
const cambiarNombre = ({...personaje}) => {
    // Lo que hacemos con esto es simplemente crear un nuevo objeto con un objeto dentro.
    personaje.nombre = 'Cristiano'; // Y luego se le asigna una propiedad con este valor.

    // El spread funciona porque reune las propiedades con el mismo nombre.
    // Si cambiamos el nombre de la propiedad a name, ya no 'funcionaria' la simulacion.
    return personaje;
};

let cristiano = cambiarNombre(messi);

console.log({messi, cristiano}) // pero en caso de buscar simular que el paso por referencia no sea 
                                // notorio, se añade el operador spread.