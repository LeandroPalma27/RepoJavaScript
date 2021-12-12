let cadena = "abcdefghijklmnñopqrstuvwxyz";
let arrayAlfabeto = cadena.split('');
console.log(arrayAlfabeto);

// Explicacion: Split es un metodo que permite dividir una cadena en funcion a un tipo de separacion(que
//              se indica como parametro), para al final obtener como resultado un arreglo con los ele_
//              mentos conformados por la division hecha por al funcion split.
//              El tipo de separacion se indica como una cadena, esta puede referir a una cadena vacia
//              para que la division sea en cada letra de la cadena, podria sera un espacio para que en
//              cada espacio de la cadena se tome como separacion para la respectiva separacion de la ca_
//              dena.