let primero = [...['Tobey'], 'Andrew']; // Mezcla al array con el array principal
                                        // porque comparten el tipo de dato (arreglo).
let segundo = [...primero, 'Tom']; // En este caso el operador spread permite poder combinar ese arreglo
                            // dentro del arreglo. 
console.log(segundo)

segundo.push('Tom2');

console.log({primero, segundo});

// Slice tambien podria ser de ayuda, o cualquier otro metodo que retorne un nuevo array como filter
// o map, etc.