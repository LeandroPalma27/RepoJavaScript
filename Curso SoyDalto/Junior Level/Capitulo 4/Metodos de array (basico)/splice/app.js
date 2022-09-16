let meses = ['January', 'February', 'March', 'April', 'May', 'June'];
const res = meses.splice(6, 0, 'July');
console.log(meses);
console.log(res)

const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];

const res2 = diasSemana.splice(2, 3, ...['Hola', 'xd', 'Valorant'])

console.log({...diasSemana, res2})

// Este metodo permite empalmar un elemento a un arreglo, ya sea añadiendo un nuevo elemento o modifi_
// ficando uno ya existente en el array.
// Como parametros recibe 3 cosas: La posicion de la arreglo en donde empalmara el elemento, la cantidad 
// elementos que queremos modificar y el contenido del elemento a empalmar.