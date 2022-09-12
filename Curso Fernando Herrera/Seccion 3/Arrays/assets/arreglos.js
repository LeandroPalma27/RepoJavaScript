const arreglo = new Array(10); // Forma clasica de crear un arreglo con una cantidad determinada de
                               // posiciones.
console.log(arreglo.length);

for (let i = 0; i <= 10; i++) {
    arreglo.push('xd');
}

console.log(arreglo); // Lo que se muestra es que ese arreglo tiene un espacio de 10 reservado mas los 10
                      // elementos que se han agregado con el push dentro del for.

arreglo[0] = 'hola'; // De esta manera podriamos ocupar los espacios reservados.

arreglo[1] = "skye"

for (let index = 2; index <= 9; index++) {
    arreglo[index] = "Chamber"
}

console.log(arreglo);

const arregloModerno = []; // Esta es la manera mas usada de crear arreglos (no se crean espacios).

arregloModerno.push('esto');

console.log(arregloModerno);


let videoJuegos = ['Call of Duty', 'Minecraft', 'Fortnite'];

console.log(videoJuegos); // Se muestra como una array
console.log({videoJuegos}); // Se muestra como objeto (Array object).

let datosVariadosArray = [
    1234, 
    'Minecraft', 
    true,
    10 + 20,
    function hola(){},
    () => {},
    {
        "id": 1,
        "name": "Leandro"
    },
    ['Leandro', 'Palma', 'Alvarado']
];

console.log(datosVariadosArray);

console.log({datosVariadosArray});

let arrayDeArray = datosVariadosArray.forEach((x) => {
    if (Array.isArray(x)) {
        console.log(x[2])
    }
});

// Lo de arriba es una manera compleja de acceder al elemento en cuestion requerido.

/* console.log(arrayDeArray); */ // Se genero un [['Leandro', 'Palma', 'Alvarado']] al usar filter.

let xd = datosVariadosArray[7];
console.log(xd[2]);

// Lo de arriba es una manera facil y practica de acceder al elemento en cuestion requerido.

console.log(datosVariadosArray[7][2]);

// XD

/* "Ahora lo haremos mas complejo" */

let nuevoArreglo = [
    ['Sonic', 'Spiderman', 'Superman', 'Sideral', [
        'Venom',
        'Vainilla',
        'Veneno',
        ['Ardilla', 'Causa', 'Disco', [
            'Xd',
            'Que',
            'a'
        ]]
    ]]
]


/* Para acceder a 'a', haria: */

console.log(nuevoArreglo[0][4][3][3][2]) //Listo, asi accederiamos a 'a'.
