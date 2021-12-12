// Funcion para completar ceros de la conversion de decimal a binario de numeros del 1 al 255:
const convertToCompleteBinaryUntil255ByLeanCode = (a) => {
    if (typeof a === 'number') {
        if (a <= 255) {
            let binaryJS = a.toString(2);
            let missingZeros = 8 - binaryJS.length;
            let binaryJSSplit = binaryJS.split('');
            for (let i = 0; i < missingZeros; i++) {
                binaryJSSplit.unshift('0');
            }
            let completeBinary = binaryJSSplit.join('');
            return completeBinary;
        } else {
            return null;
        }
    } else {
        return null;
    }
};

// Funcion para emparejar resultados de una conversion de decimal a binario, entre dos numeros que han
// sido convertidos a binario y que por ende habra uno que estara con ceros faltantes al inicio:
const pairToLogicalOperation = (a, b) => {
    let higherNumber = Math.max(parseInt(a, 10), parseInt(b, 10));
    let lessNumber = Math.min(parseInt(a, 10), parseInt(b, 10));
    let higherNumberString = higherNumber.toString();
    let lessNumberString = lessNumber.toString();
    let arrayHigherNumber = higherNumberString.split('');
    let arrayLessNumber = lessNumberString.split('');
    let diference = arrayHigherNumber.length - arrayLessNumber.length;
    for (let i = 0; i < diference; i++) {
        arrayLessNumber.unshift('0');
    }
    return [arrayHigherNumber.join(''), arrayLessNumber.join('')]
};

const calcularNumbersAND = (a, b) => {
    let firstNumber = a.toString(2);
    let secondNumber = b.toString(2);
    let arrayResultadosEnBinario = [];
    arrayResultadosEnBinario = pairToLogicalOperation(firstNumber, secondNumber);
    console.log(arrayResultadosEnBinario);
    let primerBinario = arrayResultadosEnBinario[0];
    let segundoBinario = arrayResultadosEnBinario[1];
    let operacionXOR = [];
    for (let i = 0; i < primerBinario.length; i++) {
        if (primerBinario[i] === segundoBinario[i] && primerBinario[i] === '1') {
            operacionXOR.push('1');
        } else {
            operacionXOR.push('0');
        }
    }
    return operacionXOR.join('');
};

const calcularNumbersOR = (a, b) => {
    let firstNumber = a.toString(2);
    let secondNumber = b.toString(2);
    let arrayResultadosEnBinario = [];
    arrayResultadosEnBinario = pairToLogicalOperation(firstNumber, secondNumber);
    console.log(arrayResultadosEnBinario);
    let primerBinario = arrayResultadosEnBinario[0];
    let segundoBinario = arrayResultadosEnBinario[1];
    let operacionXOR = [];
    for (let i = 0; i < primerBinario.length; i++) {
        if (primerBinario[i] === '1') {
            operacionXOR.push('1');
        } else if (segundoBinario[i] === '1'){
            operacionXOR.push('1');
        } else {
            operacionXOR.push('0');
        }
    }
    return operacionXOR.join('');
};

const calcularNumbersXOR = (a, b) => {
    let firstNumber = a.toString(2);
    let secondNumber = b.toString(2);
    let arrayResultadosEnBinario = [];
    arrayResultadosEnBinario = pairToLogicalOperation(firstNumber, secondNumber);
    console.log(arrayResultadosEnBinario);
    let primerBinario = arrayResultadosEnBinario[0];
    let segundoBinario = arrayResultadosEnBinario[1];
    let operacionXOR = [];
    for (let i = 0; i < primerBinario.length; i++) {
        if (primerBinario[i] === '1' && segundoBinario[i] === '0') {
            operacionXOR.push('1');
        } else if (segundoBinario[i] === '0' && primerBinario[i] === '1'){
            operacionXOR.push('1');
        } else {
            operacionXOR.push('0');
        }
    }
    return operacionXOR.join('');
};

console.log(calcularNumbersAND(12, 30));
console.log(calcularNumbersOR(12, 30));
console.log(calcularNumbersXOR(12, 30));