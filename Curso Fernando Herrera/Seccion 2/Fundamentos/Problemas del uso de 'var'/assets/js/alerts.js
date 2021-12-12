// console.log(nombre + ' Palma');

var nombre2 = 'Leandro';

// Lo malo de las declaraciones con var, es que estas permiten ser accedidas una vez esten definidas 
// gracias al hositing, pero en caso no estar inicializadas y las llamemos por alguna razon, nos mos
// trara undefined, lo cual hace que la depuracion del codigo sea muy lenta.

// Ahora, si usamos let o const, el hoisting de igual manera las definira, pero no se permitira acceder a
// ellas sin antes haberlas inicializado. Es por eso que es importante dejar de usar var para usar let o 
// const (Se mostrara un error mas entendible y solucionable).

let nombre = 'leandro';

let nombre3 = prompt('¿Ingrese su nombre?');
console.log(nombre3);