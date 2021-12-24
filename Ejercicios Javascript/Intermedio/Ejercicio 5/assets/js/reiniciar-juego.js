const reiniciar = document.getElementById('btnReiniciarBaraja');

// Eventos:

// Evento que permite reniciar el juego (se vuelve a obtener una baraja aleatoria):
reiniciar.addEventListener('click', () => {
    barajaCartas = [];
    cartasBarajeadas = [];
    crearBaraja();
    console.clear();
    contadorPuntaje = 0;
    contenedorPuntaje[0].innerText = '';
    cajaCartas1.innerHTML = '';
    puntajes = [];
})