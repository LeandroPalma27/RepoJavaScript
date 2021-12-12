let elementos = document.querySelector('.xd');
for (elemento of elementos.getAttributeNames()) {
    let valor = elementos.getAttribute(elemento);
    // console.log(valor);
}


// el metodo getAttribute retorna el contenido del atributo obtenido de algun element (recordar que como 
// parametro recibe el nombre del atributo a buscar).

/* El metodo getAttributeNames retorna un array con todos los atributos del element pero en formato cadena. */

/* El metodo getAttributeNode() retorna un objeto de tipo Atributo (el nodo del elemento en este caso) */

/* No entendi para que sirve el getAttributeNodeNS() */

/* No entendi para que sirve el getAttributeNS() */

let resultado = elementos.getAttributeNodeNS('','class') 

console.log(resultado);