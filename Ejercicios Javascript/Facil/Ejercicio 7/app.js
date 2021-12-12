let DNI = 77276954;
let letraDNI = 'T';

let letras = [
    'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
    'C', 'K', 'E', 'T'
];

const calcularLetraDNI = (dni, letra) => {
    if (typeof dni === 'number' && dni > 0 && dni <= 99999999) {
        let restoOperador = dni % 23;
        let letraCorrespondiente = letras[restoOperador];
        if (letra == letraCorrespondiente) {
            return 'El DNI y la letra ingresada son validos.'
        } else {
            return 'El DNI es correcto pero la letra no.'
        }
    } else {
        return 'Ingrese datos validos.';
    }
};

console.log(calcularLetraDNI(DNI, 'J'));