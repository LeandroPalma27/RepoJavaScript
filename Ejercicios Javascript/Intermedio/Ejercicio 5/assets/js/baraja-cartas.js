let barajaCartas = [];
let cartasBarajeadas = [];
const tipoCarta = ['H', 'C', 'D', 'S']; // Tipos de cartas
const cartasEspeciales = ['A', 'J', 'Q', 'K']; // Cartas especiales

// Esta funcion crea la baraja, se ejecuta al iniciar el programa o al reiniciar el juego:
const crearBaraja = () => {
    for (let i = 2; i <= 10; i++) {
        // Si quiero repetir una carta n por cada tipo de carta, debo incluir otro for
        // ya que primeramente se iterara 2, 3, 4, 5, ..., 10. Con un for dentro de cada iteracion se haria:
        // 2 (H, C, D, S), 3 (H, C, D, S), 4 (H, C, D, S), ..., 10 (H, C, D, S)...)
        for (tipo of tipoCarta) {
            barajaCartas.push(i + tipo);
        }
    }
    // Para crear cartas especiales, empezamos por los numeros de esas cartas especiales:
    for (especial of cartasEspeciales) {
        // Luego vamos a por los tipos de carta que cada numero especial necesita:
        for (tipo of tipoCarta) {
            barajaCartas.push(especial + tipo);
        }
    }
    cartasBarajeadas = _.shuffle(barajaCartas);
}

crearBaraja(); // Se ejecuta al cargar el programa en el navegador

// Esta funcion permite poder sacar una carta de la baraja ya barajeada (valga la redundancia):
const sacarCarta = () => {
    if (!(cartasBarajeadas[cartasBarajeadas.length - 1] == undefined)) {
        let carta = cartasBarajeadas.pop(); // Se iran quitando las cartas que van saliendo.
        valorCarta(carta); // Se ejecuta la funcion que obtiene el valor de la carta.
        return carta;
    } else {
        return null;
    }
}
