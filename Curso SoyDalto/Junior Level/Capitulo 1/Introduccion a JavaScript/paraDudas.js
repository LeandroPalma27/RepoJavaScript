var numero = 7;
function mostrarNumero(){
    console.log(numero);
    if(numero == 7){
        numero = "Soy un numero 7";
        console.log(numero);
        numero = 7;
    }
}
function cambiarNumero(){
    if(numero == 7){
        numero = 9;
        console.log(numero);
    }else{
        console.log("el numero conservo su estado string");
    }
}

mostrarNumero();
cambiarNumero();

// Ejercicio 1

function mostrarNumero(){
    numero = 7;
    console.log(numero);
    if (numero == 7){
        console.log("El numero es 7");
    }else{
        console.log("El numero es undefined");
    }
    var numero;
}
mostrarNumero();

//Ejercicio 2