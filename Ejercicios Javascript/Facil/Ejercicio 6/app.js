/* const numeroCuadriculas = (e) => {
    if (e < 0) {
        return null
    } else {
        if (e === 0) {
           return 0; 
        } else {
            let operacion = Math.pow(e, 2) + 2
        }
    }
}; */

const numberSquares = n => n > 1 ? n ** 2 + numberSquares(n - 1) : 1;

// Lo de arriba seria algo como:

const myNumberSquares = (n) => {
    if (n === 0) {
        return 0;
    } else if (n > 1) {
        // Esta funcion es recursiva ya que se llama a si mismo con la finalidad de poder calcular
        // algo en especifico para la resolucion de todo el problema.
        return Math.pow(n, 2) + myNumberSquares(n - 1);
        // La cosa es que, la logica del problema es que para poder resolverlo se debe calcular
        // la potencia cuadrada del numero y luego del siguiente y del siguiente asi hasta llegar
        // a 1 o 0 en este caso, donde ya se retorna 0 o 1.

        // Sinceramente no comprendo porque al llegar a 1 no se retorna 1.
    } else if (n === 1){
        return 1;
    }
};

// Ojo con la recursividad aqui (aprender programacion recursiva).
console.log(myNumberSquares(4));