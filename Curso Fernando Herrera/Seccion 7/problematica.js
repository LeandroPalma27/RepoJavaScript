const personas = [
    {
        tipo: 'Nike'
    },
    {
        tipo: 'Puma'
    },
    {
        tipo: 'Nike'
    },
    {
        tipo: 'Adidas'
    },
    {
        tipo: 'Rebook'
    },
    {
        tipo: 'Nike'
    },
    {
        tipo: 'Adidas'
    },
    {
        tipo: 'Nike'
    },
    {
        tipo: 'Puma'
    }
];

const modelos = [];

for (persona of personas) {
    modelos.push(persona.tipo);
}

// Funcion de filtrado de datos repetidos de un array:
const modelosFiltrados = modelos.filter((elemento, indice, array) => {
    console.log(array)
    // Al momento de evaluar si el indice del elemento en cuestion coincide con el indice actual, se puede generar que el elemento ya exista antes, 
    // por lo tanto la posicion leida sera la mas cercana. Asi que por ese elemento no retornara(SERA FILTRADO)
    if (modelos.indexOf(elemento) == indice) return elemento;
});

console.log(modelosFiltrados);

const nuevo = new Set(modelos);

console.log([...nuevo]);