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

const modelosFiltrados = modelos.filter((elemento, indice) => {
    if (modelos.indexOf(elemento) == indice) return elemento;
});

console.log(modelosFiltrados);

const nuevo = new Set(modelos);

console.log([...nuevo]);