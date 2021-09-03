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

const numero = 7;
mostrarNumero();
mostrarNumero2();
function mostrarNumero(){
    if (numero == 7){
        console.log("El numero es 7");
    }else{
        console.log("El numero es undefined");
    }
}
function mostrarNumero2(){
    if(numero==5){
        console.log("El numero es 5");
    }else{
        console.log("El numero no es 5");
    }
}
//Ejercicio 2