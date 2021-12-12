let titulo1 = document.querySelector('.title1')
let caja2 = document.getElementById('caja2')
let parrafo1 = document.querySelector('.parrafo1')
let boton = document.getElementById('btnProbar')
let boton2 = document.getElementById('btnProbar2')


boton.addEventListener('click', function(){
    caja2.replaceChild(titulo1, parrafo1);
})

/* 
OJO: Debemos tener al tanto el hecho de usar nodos ya existentes, ESTOS NODOS CUANDO SE USAN LO UNICO QUE
SE HARA SERA MOVERLOS DE PADRE A OTRO PADRE. Si queremos evitar eso, debemos clonarlos o crear nuevos nodos.
 */


let miElemento = document.createElement('h2')
console.log(miElemento)
miElemento.textContent = 'Hola mundo';

boton2.addEventListener('click', function(){
    caja2.replaceChild(miElemento, parrafo1)
})

/* 
replaceChild() permite poder reemplazar un nodo hijo por otro nodo. Como parametro recibe primero al nuevo
nodo y como segundo parametro al nodo a reemplazar. */
