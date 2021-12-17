// Mas detalles

/* Para borrar una propiedad: */

let miObjeto = {
    id: 1,
    name: 'Leandro',
    edad: 20
};

console.log(miObjeto);

delete miObjeto.edad;

console.log(miObjeto);

// Si quiero crear una nueva propiedad sin tocar el objeto literal:

miObjeto.felicidad = true;

console.log(miObjeto);


// Esto puede ser de gran ayuda en caso de juntar propiedad y valor en pares que puedan ser leidos.
let entriesPares = Object.entries(miObjeto);

console.log({entriesPares});