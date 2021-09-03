const numero = 7;
mostrarNumero(); //Esto se puede hacer por el HOISTING de la declaracion de las funciones.
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