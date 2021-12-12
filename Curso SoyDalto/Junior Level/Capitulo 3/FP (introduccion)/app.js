function comprobador(funct) {
    let comprobador = funct;
    if (comprobador == true) {
        console.log('Si es dividible por 2.');
    } else {
        console.log('No es divible por 2.');
    }
}

function divisionPorDos(number) {
    let numero = number;
    if (numero % 2 == 0){
        return true;
    } else {
        return false;
    }
}

comprobador(divisionPorDos(9));


