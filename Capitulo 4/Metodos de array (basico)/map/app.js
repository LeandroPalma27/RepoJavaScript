let array = [1, 2, 3, 4, 5];
let resultado = array.map(x => {
    return x%2 == 0;
});
console.log(resultado);

// Explicacion: Este metodo es muy parecido a filter, con la diferencia de que este no elimina ni modifi_
//              ca el array principal, sino que crea uno nuevo con todos los resultados que arroja una
//              funcion pasada como parametro y que afecta a cada uno de los elementos del array princi_
//              pal.
// Sin importar lo que se retorne, el array contendra todos los retornos de cada uno de los elementos del
// array principal, por ende el tamaño del nuevo array creado por map sera el mismo que el del array prin_
// pal.