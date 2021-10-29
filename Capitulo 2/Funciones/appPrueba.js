var switcher = true;
var arrayNumerosAyB = [];

while (switcher == true) {
    let numeroA = prompt('Ingrese un numero a:');
    let numeroB = prompt('Ingrese un numero b:');
    arrayNumerosAyB.push(parseInt(numeroA, 10));
    arrayNumerosAyB.push(parseInt(numeroB, 10));
    let confirmador = sumarConPrompt(arrayNumerosAyB);
    if (confirmador == true) {
        let apagador = confirm('¿Desea repetir la funcion?');
        if (apagador == true) {
            console.log('ok mano');
            arrayNumerosAyB = [];
        } else if (apagador == false) {
            switcher = false;
        }
    }
}

function sumarConPrompt(data) {
    let miArray = data;
    try {
        let sumador = 0;
        for (let i = 0; i < miArray.length; i++) {
            sumador += miArray[i];        
        }
        alert(sumador); 
        return true;
    } catch (e) {
        return false;
    }
}