const arreglo = ['Tobey', 'Andrew', 'Tom'];

let i = 0;

/* while (i < arreglo.length) {
    console.log(arreglo[i]);
    i++;
} */

// Saltemos a uno:

while (i < arreglo.length) {
    if (i === 2) {
        i++; // Esto se hace porque como no se cambia el iterador por si solo, podria crearse bucle infinito.
        continue;
    }
    console.log(arreglo[i]);
    i++;
}