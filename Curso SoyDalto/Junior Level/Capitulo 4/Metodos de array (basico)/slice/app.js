let array = [1, 2, 3, 4, 5];
let pedazoArray = array.slice(0, 3);
console.log(array);
console.log(pedazoArray);

// Explicacion: Slice es un metodo que nos permite sacar una porcion de un array, sin modificar al array
//              principal. Recibe como parametro el inicio de la posicion desde donde queremos sacar una 
//              porcion y el final.
//              Recordar que este metodo no modifica al array principal, crea un nuevo array(la porcion).