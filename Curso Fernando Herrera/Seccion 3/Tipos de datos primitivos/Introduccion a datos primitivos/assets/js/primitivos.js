let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Mary Jane'; // No cambiamos nada, solo reinicializamos.
console.log(nombre);

// Pero si quisieramos declarar otra variable nombre con let, nos daria un error evidentemente.

console.log(typeof nombre);

nombre = 941158666;
// Se demuestra que es debilmente tipado, porque ahora deja de ser string para ser un number.
console.log(typeof nombre);

let decimal = 1.9;

console.log(typeof decimal);

// Se demuestra que decimal y entero es number, no hay diferencia.

let sinDefinir;

console.log(typeof sinDefinir); // Sale undefined porque no esta inicializado.

let nulo = null;

console.log(typeof nulo);

// Cabe destacar que para los navegadores los null son objetos.

var gola = 10;
gola.toString(2);
console.log(gola) // Este number no cambia por mas que se use el metodo toString(). INMUTABLE
console.log(gola.toString()) // En este caso si cambiaria pero no es la variable en si, es una copia.
console.log(gola) // Muestra number, por lo que lo de arriba es una copia.

// TODO: Investigar mutabilidad en JS.