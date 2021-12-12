let elemento = document.getElementById('hola').getElementsByClassName('list-option');
console.info(elemento);

let allDivs = document.getElementsByTagName('div')
console.info(allDivs);

let miElemento = document.querySelectorAll('.list-option')
console.info(miElemento);

/* OJO: El querySelectorAll devuelve un NodeList, mientras que los demos metodos de selecccion en grupo 
devuelven HTMLCollection. */
