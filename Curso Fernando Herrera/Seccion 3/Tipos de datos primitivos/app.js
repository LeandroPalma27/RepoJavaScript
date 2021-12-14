// Tipos de datos primitivos

let cadena = 'Hola mundo';  // Dato de tipo cadena, inmutable completamente.

let numero = 1_000_000; // Dato de tipo number, inmutable y no distinge enteros, flotantes, decimales, etc.
                        // Todos los datos numericos son reconocidos por lo mismo.

let booleano = true; // Dato de tipo booleano. ¿Como rayos mutarias un valor boleano? INMUTABLE SIN DUDA ALGUNA.

let undefined; // Variable undefinida, se declara pero nunca se inicializa.

let nulo = null; // Dato de tipo nulo, en caso de las variables siempre debe ser asignado.

let simbolo = Symbol('0012T-354K2-K937J'); // Tipo de dato symbol que usa cuando queremos iniciar un dato
// unico en todo el codigo;

let xd = '0012T-354K2-K937J';

if (xd == simbolo) {
    console.log('si')    
}

// NINGUN DATO CON EL MISMO VALOR QUE UN SYMBOL PODRA SER COMPARADO CON ESE SYMBOL YA QUE ES UNICO.
// Cualquier comparacion retornara false.