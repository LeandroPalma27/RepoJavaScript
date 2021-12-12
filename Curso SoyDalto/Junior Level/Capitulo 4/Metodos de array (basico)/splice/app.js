let meses = ['January', 'February', 'March', 'April', 'May', 'June'];
meses.splice(6, 0, 'July');
console.log(meses);

// Este metodo permite empalmar un elemento a un arreglo, ya sea añadiendo un nuevo elemento o modifi_
// ficando uno ya existente en el array.
// Como parametros recibe 3 cosas: La posicion de la arreglo en donde empalmara el elemento, la cantidad 
// elementos que queremos modificar y el contenido del elemento a empalmar.