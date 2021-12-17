const crearPersona = (nombre, apellido) => {
    return {nombre, apellido}; // No hace falta colocar propiedades en este caso.
}

// Si queremos hacerlo en una sola linea:

const crearPersonaV2 = (nombre, apellido) => ({nombre, apellido}); // Asi seria en una sola linea.

console.log(crearPersonaV2('Leandro', 'Palma'));