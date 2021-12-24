const botonSacarCarta = document.getElementById('btnSacarCarta');
const contenedorCartas = document.querySelector('.container-cards');
const cajaCartas1 = document.querySelector('.cartas_1');
const cajaCartas2 = document.querySelector('.cartas_2');
const contenidoSacado = [];

botonSacarCarta.addEventListener('click', () => {
    /* let contenido = contenedorCartas.innerText;
    if (!(cartasBarajeadas[0] == undefined)) {
        contenido = contenido + ' ' + cartasBarajeadas[0];
        contenedorCartas.innerText = contenido;
        let sacado = cartasBarajeadas.splice(0, 1);
        contenidoSacado.push(sacado);
    } else {
        console.log('Se acabaron las cartas.');
    } */
    let carta = sacarCarta();
    if (!(carta == null)) {
        const imagenCarta = document.createElement('img');
        imagenCarta.src = `assets/cartas/${carta}.png`;
        cajaCartas1.appendChild(imagenCarta);
    } else {
        console.log('Se acabo la baraja.');
    }
});