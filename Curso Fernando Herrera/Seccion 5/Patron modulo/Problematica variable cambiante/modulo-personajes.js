
// Debemos tener cuidado con los datos mutables que retornamos en los modulos:
const moduloPersonaje = (() => {
    const personajes = [];
    const numeroMarks = 49;
    const botonMarks = document.querySelector('.btn-marks');
    botonMarks.addEventListener('click', () => {
        for (let i = 1; i <= numeroMarks; i++) {
            personajes.push(`Mark ${i}`);
        }
    });
    return {
        // Esto nos daria una arreglo vacio si no se acciona el evento de arriba.
        personajesModulo: personajes
    }
})();

// Para solucionar se haria lo siguiente:
const moduloPersonaje2 = (() => {
    const retornoModulo = {};
    const personajes = [];
    const numeroMarks = 49;
    const botonMarks = document.querySelector('.btn-marks');
    botonMarks.addEventListener('click', () => {
        for (let i = 1; i <= numeroMarks; i++) {
            personajes.push(`Mark ${i}`);
        }
        retornoModulo.arregloPersonajes = personajes;
    });
    retornoModulo.cantidadMarks = numeroMarks;
    return retornoModulo;
})();
