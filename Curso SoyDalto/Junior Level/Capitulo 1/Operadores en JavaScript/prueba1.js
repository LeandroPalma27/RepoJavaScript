function hola() {
    let numero = 5;
    let numero2 = 6;
    var funcionSuma = function (a, b) {
        let suma = a + b;
        console.log(suma);
    }
    funcionSuma(numero, numero2);
}

hola();

//Recuerda, el scope de la funcionSuma tambien es de bloque en este caso.