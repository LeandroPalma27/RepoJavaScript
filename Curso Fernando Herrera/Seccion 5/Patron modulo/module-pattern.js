
// Sintaxis del patron modulo (funcion anonima):
(() => {
    // Permite ejecutar js de manera estricta. Se usa mucho en el patron modulo (evita problemas).
    'use strict'; 
    const holaMundo = 'Hola mundo';
    console.log(holaMundo);
})(); // La funcion se autoinvoca.
