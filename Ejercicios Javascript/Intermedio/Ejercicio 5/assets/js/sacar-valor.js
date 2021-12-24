// Esta funcion permite poder obtener el valor de la carta ya sacada:
const valorCarta = (carta) => {
    let indiceCarta;
    let valor;
    // carta.length == 3 ? indiceCarta = carta[0] + carta[1] : indiceCarta = carta[0];
    indiceCarta = carta.substring(0, carta.length - 1);
    indiceCarta == 'A' ? indiceCarta = '1' : indiceCarta == 'J' ? indiceCarta = '11' : indiceCarta == 'Q' ? indiceCarta = '12' : indiceCarta == 'K' ? indiceCarta = '13' : null;
    valor = parseInt(indiceCarta, 10);
    calcularPuntaje(valor);
}