let parrafo = document.getElementById('parrafo')

let caja2 = document.querySelector('.container2')
let parrafoClonado = parrafo.cloneNode(true)
console.log(parrafoClonado)
caja2.appendChild((parrafoClonado))


const domParser = new DOMParser();

/* let miDOMFragment = domParser.parseFromString('<h1>HOLA</h1>', 'text/html');
console.log(miDOMFragment) */

/* 
Conclusiones:
Al manejar metodos de childs y reutilizar elementos ya existentes en el DOM, se debe tener en cuenta que
los elementos que ya existen solo se moveran en caso de inncluirlos en otros padres.
En caso de no querer mover nodos, debemos clonarlos con el metodo cloneNode(). Tambien se podria considerar
crear elementos fuera de pantalla con JS. 

Para que sirve appendChild?
Este metodo nos permite añadir hijos a algun padre, pero al final de la lista de hijos. Solo se permite
pasar como parametro a un solo hijo y este debe ser un objeto de tipo Node.
*/