let elementos = ['<h2>Tati</h2>', '<h2>Perro</h2>', '<h2>Negro</h2>'];
elementos.push('<h2>Bonito</h2>', '<input type="text" value="Ingresa causa">');

for (let elemento of elementos) {
    document.write(elemento);
}

// Explicacion: Este metodo de array lo que hace es añadir un elemento mas a un array, pero al final de
//              este. Los parametros que recibe el metodo son los elementos a añadir.
//              Tener en cuenta que el metodo retorna la cantidad de elementos existentes en el array,
//              pero desde que se añadio el elemento.