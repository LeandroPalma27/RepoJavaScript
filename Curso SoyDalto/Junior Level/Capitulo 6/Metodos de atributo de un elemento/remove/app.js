/* removeAttribute sirve para poder eliminar un atributo de algun elemento, como parametro se pasa el nombre del 
atributo a eliminar. */

/* removeAttributeNode sirve para poder eliminar un atributo de algun elemento, como parametro se pasa si o si un
objeto de tipo atributo*/

let elemento = document.getElementById('miDiv')
let atributoNodo = elemento.getAttributeNode('class');
console.log(atributoNodo);

elemento.removeAttributeNode(atributoNodo)
