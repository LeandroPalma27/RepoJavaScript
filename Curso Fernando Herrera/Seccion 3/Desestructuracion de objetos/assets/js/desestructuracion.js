const clasica = (...args) => args;
console.log(clasica({nombre: 'Tobey'}, {nombre: 'Andrew'}, {nombre: 'Tom'}));

// Destructuracion de arreglos:
let [primer_spiderman, segundo_spiderman, tercer_spiderman] = clasica({nombre: 'Tobey'}, {nombre: 'Andrew'}, {nombre: 'Tom'}); 

console.log({primer_spiderman, segundo_spiderman, tercer_spiderman}); // AL poner corchetes crea objeto.
// Lo de arriba hace muy poderoso a javascript.


// Destructuracion de objetos:
const retornoObjeto = (nombre, apellido) => ({nombre, apellido});
// Desestructuramos para asi poder dividir el nombre del apellido, ahora nos centramos en el apellido.
let {nombre: nuevoNombre, apellido: apellidoParker} = retornoObjeto('Peter', 'Parker'); // Hasta se le puede cambiar el
                                                                   // nombre a la propiedad.

console.log({nuevoNombre, apellidoParker});

// Desestructuracion de argumentos:
const personaje = {
    name: "Peter Parker",
    alias: 'Spider-man',
    vivo: true,
    edad: 17,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Home Suit', 'Traje clasico', 'Traje negro', 'Iron Spider'],
    saludo: () => `¡${personaje.name} te saluda.`,
    'ultima-pelicula': 'Endgame' // En caso de definir una propiedad con guion.
};

const imprimirArgumentos = ({name, alias, vivo, edad, coords = null, trajes}) => {
    // En caso de recibir un parametro vacio o inexistente, podemos inicializarlo
    // con algo en los parametros de la funcion.
    console.log({name});
    console.log({alias});
    console.log({vivo});
    console.log({edad});
    console.log({coords});
    console.log({trajes});
}

imprimirArgumentos(personaje);