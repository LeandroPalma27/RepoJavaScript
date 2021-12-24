let puntajes = [];
const terminar = document.getElementById('btnTerminarTurno');

const winOrLose = (puntaje) => {
    puntaje == 21 ? console.log('Blackjack!!') : puntaje > 21 ? console.log('Perdiste.') : null;
}

const terminarTurno = () => {
    puntajes.push(contadorPuntaje);
}

/* terminar.addEventListener('click', (e) => {
    terminarTurno();
    console.log(puntajes);
    turnoComputadora(puntajes[0]);
}); */

const turnoComputadora = (puntajeMinimo) => {
    crearBaraja();
    barajaCartas = [];
    cartasBarajeadas = [];
    contadorPuntaje = 0;
    // do {
        let carta = sacarCarta();
        if (!(carta == null)) {
            const imagenCarta = document.createElement('img');
            imagenCarta.src = `assets/cartas/${carta}.png`;
            cajaCartas2.appendChild(imagenCarta);
            console.log(contadorPuntaje);
        } else {
            console.log('Se acabo la baraja.');
        }
    // } while (puntajeMinimo > contadorPuntaje);
}