function mostrarNumero(){
    let numero = 10;
    if(numero==10){
        console.log("El numero es 10");
    }
    //Esta seria la manera correcta de usar un let.
}

mostrarNumero();

try {
    console.log(numero);//Tira una excepcion porque numero tiene scope de bloque (dentro de la funcion)
} catch (error) {
    console.log(error);//Excepcion
}

let numero2 = 13;
function mostrarNumero2(){
    if(numero2==13){
        console.log("El numero es 13");
    }
}

mostrarNumero2();
console.log(numero2); //Muestra el valor de numero2 a pesar de ser un let, porque esta declarado globalmente, y su scope seria GLOBAL.
//Aunque no es lo correcto, lo mejor seria usar un var.