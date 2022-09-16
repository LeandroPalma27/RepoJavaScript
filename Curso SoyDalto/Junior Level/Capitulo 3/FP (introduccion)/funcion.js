var arreglo = ['el', 'camino', 'de', 'smnwh'];

const obtenerPrimerElementoArray = (arreglo) => {
    let arregloFuncion = arreglo;
    return arregloFuncion.splice(0, 1);
};

console.log(obtenerPrimerElementoArray(arreglo));
console.log(arreglo);

var saludo = 'hola';

console.log(saludo);
function saludar(data) {
    data = 'que fue';
    console.log(data);
}

saludar(saludo);
console.log(saludo);