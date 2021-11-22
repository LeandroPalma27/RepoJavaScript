var arreglo = ['el', 'camino', 'de', 'smnwh'];

const obtenerPrimerElementoArray = (arreglo) => {
    let arregloFuncion = arreglo;
    return arregloFuncion.splice(0, 1);
};

console.log(obtenerPrimerElementoArray(arreglo));
console.log(arreglo);