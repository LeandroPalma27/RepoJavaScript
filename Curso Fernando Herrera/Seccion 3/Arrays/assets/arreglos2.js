let misJuegos = ['Call of duty', 'Minecraft', 'Fornite', 'FIFA'];

console.log(misJuegos.length);

let concatenando = misJuegos.concat('xd');
console.log(concatenando); // Para hacer mantenible esa inclusion dentro del arreglo, deberia guardar el 
                           // el retorno en una variable.
// Se podria usar push y concat para algo parecido, pero push retorna el nuevo length, concat retorna
// un nuevo array con el elemento añadido.
let conca = misJuegos.push('xd');
console.log(conca); // Se muestra lo que se retorna y se guardo en la variable conca.

// Para ver el resultado deberiamos hacer esto:

console.log(misJuegos);

let nuevoXd = misJuegos.map((x) => {
    if (x == 'FIFA') {
        return 'PES';
    } else {
        return x;
    }
});

console.log(nuevoXd);

nuevoXd.forEach((elemento, indice, array) => { // forEach puede recibir todos esos parametros.
    console.log({elemento, indice, array}); // Para poder conseguir cosas como estas.
})

let elementoQuitado = nuevoXd.pop();

console.log('De: ', nuevoXd, ', se quito: ', elementoQuitado);
console.log({nuevoXd, elementoQuitado});