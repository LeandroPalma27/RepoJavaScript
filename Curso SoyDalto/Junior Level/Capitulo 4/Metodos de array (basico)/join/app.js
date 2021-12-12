// let array = new Array();
// array = ['1', '2', '3', '4', '5'];

let numeros = '1,2,3,4,5,6';
let numerosArray = numeros.split(',');
console.log(numerosArray);

let resultado = numerosArray.join('');
console.log(resultado);

// Explicacion: join es un metodo que nos permite poder juntar todos lo elementos de un array en una so_
//              la cadena. Recibe como parametro un caracter que servira como separador de los caracte_
//              res de la nueva cadena retornada.