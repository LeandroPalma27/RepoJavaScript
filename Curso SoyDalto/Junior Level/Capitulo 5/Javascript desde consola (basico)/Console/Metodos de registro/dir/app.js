let miObjeto = new Object();

miObjeto.name = "Leandro";

// Este metodo es muy importante de aprender, y tambien es simple.
// Al usar la programacion, es normal manejar objetos de todo tipo, y es importante tambien poder acceder
// a sus propiedades y metodos de una manera facil y rapida.
// Con el metodo dir, podemos hacer esto facilmente desde la consola del navegador.

let arrayY = [];

const miJson = [
    {
        "name": "Leandro"
    },
    {
        "name": "Leandro"
    },
    {
        "name": "Leandro"
    }
];

let xd = JSON.stringify(miJson);
console.log(xd);

let resultado = JSON.parse(xd);
console.log(resultado);

console.dir(xd)
