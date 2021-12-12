// Sin considerar año bisiesto

const diasVividos = (edad) => {
    return edad * 365;
};

console.log(diasVividos(20));

// Considerando años bisiestos

const diasVividosBi = (edad) => {
    let añosBisiestos = 0;
    let objetoDate = new Date();
    let añoPresente = objetoDate.getFullYear();
    let añoNacimiento = (parseInt(añoPresente, 10)) - (edad);
    let arrayAñosTranscurridosNumericos = [];
    let arrayAñosTranscurridosStrings = [];
    let añoNacimientoNumerico = parseInt(añoNacimiento, 10);
    arrayAñosTranscurridosNumericos.push(añoNacimientoNumerico);
    for (let i = 0; i < edad; i++) {
        añoNacimientoNumerico++;
        arrayAñosTranscurridosNumericos.push(añoNacimientoNumerico);
    }
    console.log(arrayAñosTranscurridosNumericos);
    arrayAñosTranscurridosStrings = arrayAñosTranscurridosNumericos.map((elemento) => {
        return elemento.toString();
    });
    arrayAñosTranscurridosStrings.forEach((elemento) => {
        if (elemento.substring(2) == '00') {
            let año = parseInt(elemento, 10);
            if (año % 400 == 0) {
                añosBisiestos++;
            }
        } else {
            let año = parseInt(elemento, 10);
            if (año % 4 == 0) {
                añosBisiestos++;                
            }
        }
    });
    return edad * 365 + añosBisiestos;
};

console.log(diasVividosBi(49));