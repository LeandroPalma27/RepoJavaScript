// Crea una tabla. Este metodo si o si debe llevar un objeto como parametro, ya sea array o un objeto
// que contenga datos para poder crear una tabla. No puede recibir json puro.

const miJson = [
    {
        "nombre": "Leandro",
        "edad": 20
    },
    {
        "nombre": "Martin",
        "edad": 20
    },
    {
        "nombre": "Gustavo",
        "edad": 17
    }
];

const objeto = {};
objeto.nombre = 'Leandro';
objeto.edad = 20;

let resultado = JSON.stringify(miJson);
console.table(objeto);

