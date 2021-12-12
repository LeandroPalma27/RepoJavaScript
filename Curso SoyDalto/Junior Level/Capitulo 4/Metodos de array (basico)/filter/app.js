let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let resultado = array.filter(x => x % 2 == 0);
console.log(resultado);

// Explicacion: El metodo filter crea un nuevo array con los elementos de un array principal pero fil_
//              trados en funcion a una condicion expresada a traves de una funcion y pasada como para_
//              metro al metodo en cuestion. El nuevo array se forma traves de lo que la condicion
//              (funcion) vaya retornando.