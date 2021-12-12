const shiftToLeft = (a, b) => {
    let resultado = a * (Math.pow(2, b))
    return resultado;
};

console.log(shiftToLeft(-32, 2))