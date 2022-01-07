const caja = document.getElementById('overview');
let titulo = document.getElementById('titulo');

console.log(caja.attributes.class);

caja.removeChild(titulo);



/* 
El metodo removeChild permite eliminar un hijo en especifico de algun padre. Este puede quedarse en memo
ria porque retorna el nodo hijo eliminado, siempre y cuando se almacene en una variable. */
