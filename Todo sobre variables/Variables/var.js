var numero;

function mostrarNumero(){
    numero=10;
    if(numero==10){
        console.log("El numero es 10");
    }
}

console.log(numero); //Muestra undefined porque el scope de la inicializacion es de bloque que es la funcion.
mostrarNumero();
