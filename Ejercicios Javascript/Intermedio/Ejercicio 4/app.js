const numeroDigitos = (data) => {
    if (Math.sign(data) == 1 || Math.sign(data) == 0) {
        if (data - Math.floor(data) == 0) {
            let numero = data.toString();
            return parseInt(numero.length, 10);
        } else {
            let numeroDecimalString = data.toString();
            let partesNumeroDecimal = numeroDecimalString.split('.');
            let cont = 0;
            partesNumeroDecimal.forEach((e) => {
                cont += e.length;
            })
            return cont;
        }
    } else if (Math.sign(data) == -1) {
        let numeroPositivo = -(data);
        if (numeroPositivo - Math.floor(numeroPositivo) == 0) {
            let numero = numeroPositivo.toString();
            return parseInt(numero.length, 10);
        } else {
            let numeroDecimalString = numeroPositivo.toString();
            let partesNumeroDecimal = numeroDecimalString.split('.');
            let cont = 0;
            partesNumeroDecimal.forEach((e) => {
                cont += e.length;
            })
            return cont;
        }
    }
}

console.log(numeroDigitos(0));