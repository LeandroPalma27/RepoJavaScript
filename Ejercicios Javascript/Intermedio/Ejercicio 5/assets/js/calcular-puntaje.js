let contadorPuntaje = 0;
const contenedorPuntaje = document.querySelectorAll('#puntaje');

const calcularPuntaje = (valor) => {
    contadorPuntaje += valor;
    /* contenedorPuntaje.innerText = contadorPuntaje; */
    mostrarPuntaje(contadorPuntaje);
    winOrLose(contadorPuntaje);
}

const mostrarPuntaje = (puntaje) => {
    contenedorPuntaje[0].innerText = puntaje;
}

const calcularPuntaje2 = (valor) => {
    contadorPuntaje += valor;
    /* contenedorPuntaje.innerText = contadorPuntaje; */
    mostrarPuntaje(contadorPuntaje, turno);
    winOrLose(contadorPuntaje);
}

const mostrarPuntaje2 = (puntaje, turno) => {
    contenedorPuntaje[1].innerText = puntaje;
}
