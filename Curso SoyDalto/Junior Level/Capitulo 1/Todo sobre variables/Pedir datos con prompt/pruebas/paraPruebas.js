var numero;
numero = 10;
var numero2 = 5;
if (typeof (numero) == "number" & typeof (numero2) == "number") {
    //Con typeof podemos obtener el tipo de dato de una variable
    //typeof es un OPERADOR
    console.log("Los datos ingresados son numericos")
}

var as = function sumaNumeros(a, b) {
    let xd = a + b;
    return xd;
}

//La inicializacion de una funcion variable se hace despues de declararla (el hoisting aca no es elevado)
console.log(as("La suma de los datos es: ",numero,numero2));

var hola = Object.prototype.toString.call(numero);
// Con este metodo tambien podemos obtener el tipo de dato de una variable o instancia.
console.log("El tipo de dato de la variable numero es:",hola);

var toType = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase();
    //Con este metodo se obtiene el tipo de dato sin el [[class]]
}

console.log("El tipo de dato de la variable numero es(pero sin [[class]]):",toType(numero));

var que = numero instanceof Date;
console.log(que);
