var printHello = function () { //RECUERDA, ESTO NO TIENE HOISTING ELEVADO
    let texto = prompt("Escriba lo que sea: ");
    let elemento = document.getElementById("titulo");
    elemento.innerHTML = texto + " (tu huevada esta funcionando)";
}

function deleteHello() {
    let elemento = document.getElementById("titulo");
    if (elemento.innerHTML.length > 0) {
        elemento.innerHTML = "";
    } else {
        alert("Primero escriba algo!");
    }
}
