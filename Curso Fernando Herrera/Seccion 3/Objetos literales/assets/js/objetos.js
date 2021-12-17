let personaje = {
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

console.log(personaje); // Las propiedades se cargan de manera alfabetica al expandir el objeto.

console.log('Nombre:', personaje.name, ', Alias:', personaje.alias, ', Edad:', personaje.edad, ', Coordenadas:', personaje.coords.lat, personaje.coords.lng);

console.log(personaje.saludo()) // Podemos acceder a la funcion de un objeto.

// Para mostrar la cantidad de trajes:

console.log('Cantidad de trajes:', personaje.trajes.length);
console.log('El traje mas avanzado:', personaje.trajes[personaje.trajes.length - 1]);

// Si desamos manejar arrays asociativos:

const propiedadNombre = 'name';

console.log(personaje[propiedadNombre]);

