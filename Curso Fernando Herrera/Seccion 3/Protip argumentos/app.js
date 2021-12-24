// Una funcion clasica posee el objeto arguments:

function clasica() {
    return arguments;
}

console.log(clasica('Tobey', 'Andrew', 'Tom'));

// Pero si queremos hacerlo en un arrow function, debe ser asi:

const clasica2 = (...args) => args; // Y en una sola linea // Operador rest

let argumentos = clasica2('Tobey', 'Andrew', 'Tom');
console.log({argumentos});

let arra  = [0, 1, 2];
let arraa = [3, 4, 5];

let resultado = [...arra, ...arraa ];

console.log(resultado);

// Ojo splice:
let pedacito = arra.splice(2, 1);

console.log(arra);
console.log(pedacito);
