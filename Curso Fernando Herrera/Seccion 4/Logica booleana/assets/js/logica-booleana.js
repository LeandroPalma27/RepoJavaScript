console.log(false || 'Hola'); // Para ser true ('Hola'), se necesita solo un valor true (expected: 'Hola').

// Ojito:

console.warn('Ojito con los operadores booleanos para ejecutar funciones');

const regresaTrue = () => {
    console.log('Soy true');
    return true;
}
const regresaFalse = () => {
    console.log('Soy false');
    return false;
}

console.log(regresaTrue() && regresaFalse()); // Al ser and, require que todo sea true, por ende al 
                                              // retornar true la primera, se ejecuta la 2da.
console.log(regresaTrue() || regresaFalse()); // Al ser or, require que solo haya un true, por ende al 
                                              // retornar true la primera, ya no se ejecuta la 2da.

// Conclusion, en javascript si ya no ahce falta ejecutar otra cosa en logica booleana para obtener el 
// resultado esperado, ya no se ejecutaran.

let hola = 1;