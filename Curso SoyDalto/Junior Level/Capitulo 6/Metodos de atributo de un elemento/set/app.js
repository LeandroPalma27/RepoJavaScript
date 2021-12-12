let elemento = document.getElementById('miDiv')
let elemento2 = document.getElementById('miDiv2')

let nodoAtributo = elemento2.getAttributeNode('title');

console.log(nodoAtributo)
elemento.setAttributeNode(nodoAtributo.cloneNode(true))


/* El metodo setAttribute() permite poder crear un atributo a un elemento y colocarle un valor si deseamos. Como
parametros debe recibir si o si el nombre el atributo a crear y en caso de querer darle un valor, otro parametros 
que sea una cadena que contenga el valor que le queremos dar al atributo.
Si un atributo ya existe y lo pasamos como parametro, sobreescribira sobre ese atributo ya existente (si pasamos
contenido para el atributo). */

/* El metodo setAttributeNode() permite que se añada un nodo a algun elemento, siempre y cuando sea un objeto de
tipo atributo y que no exista en el DOM. En caso de existir podemos incluirlo si usamos el metodo cloneNode(true). */