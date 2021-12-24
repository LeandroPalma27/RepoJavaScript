// Al usar el patron modulo, el codigo queda cerrado, por lo cual si se necesita acceder algun metodo o
// variable del mismo, habrian problemas.

// Tengo el siguiente modulo:

const moduloOperaciones = (() => {
    const PI = 3.1416;
    const suma           = (a, b) => a + b;
    const resta          = (a, b) => a - b;
    const multiplicacion = (a, b) => a * b;
    const division       = (a, b) => a / b;
    // En caso de querer usar la funciones de ese modulo fuera de este, debo retornar un objeto que
    // contenga esas funciones.
    return {
        constante_PI : PI,
        funcionRestar : resta, // Para funciones se puede hacer asi 
        suma // o asi.
    }
})();
