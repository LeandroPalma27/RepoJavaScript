var promptear = function () {
    let mensaje = prompt("Ingrese su nombre:");
    console.log(mensaje);
    if (mensaje.l != "") { //La mejor manera aqui es (mensaje.length>0)
        alert("Su nombre es: " + mensaje);
    }
}


//Al cargar la pagina, el cliente me pide que ponga mi nombre, para que se imprima en consola.