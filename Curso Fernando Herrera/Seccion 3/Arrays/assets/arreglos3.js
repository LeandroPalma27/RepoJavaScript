let huohuos = ['odbods', 'tati', 'bartolito', 'masha'];

// Para quitar elementos de un array y crear un nuevo array con esos elementos quitados:

let huohuosQuitados = huohuos.splice(2, 1);
console.log({huohuos, huohuosQuitados});

// Si quiero obtener la posicion de un elemento en especifico de un array:

let posicionMasha = huohuos.indexOf('masha');

console.log(posicionMasha); // Posicion 20

let array2 = ['hola', ['si', 'gallo'], ['vaca', 'pollo'], ['lombriz', 'pez']];

let nuevoArray = array2.map((x) => {
    if (Array.isArray(x)) {
        let miArray = x.map((e) => {
            if (e == 'lombriz') {
                return 'gusano';
            } else {
                return e;
            }
        });
        return miArray;
    } else {
        return x;
    }
});

console.log(nuevoArray);