let spidermen = {
    primer_universo: 'Spiderman Tobey',
    segundo_universo: 'Spiderman Andrew',
    tercer_universo: 'Spiderman Tom'
}

// Si queremos congelar un arreglo para ya no poder agregar propiedades, modificar sus valores o borrar pro
// piedades: 

Object.freeze(spidermen);

spidermen.cuarto_universo = 'Spiderman Miles';

delete spidermen.primer_universo;

console.log(spidermen) // Se cargaria el mismo objeto sin modificar.

// Si queremos obtener las propiedades (solo nombres): 

const propiedadesSpidermen = Object.getOwnPropertyNames(spidermen);

// Si queremos obtener los valores de las propiedades: 

const valoresSpidermen     = Object.values(spidermen); 
console.log({propiedadesSpidermen, valoresSpidermen});