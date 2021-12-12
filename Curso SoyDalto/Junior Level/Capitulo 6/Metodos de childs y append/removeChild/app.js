let titulo = document.getElementById('titulo')

titulo.parentNode.removeChild(titulo)
console.log(titulo.parentNode)

/* 
El metodo removeChild permite eliminar un hijo en especifico de algun padre. Este puede quedarse en memo
ria porque retorna el nodo hijo eliminado, siempre y cuando se almacene en una variable. */
