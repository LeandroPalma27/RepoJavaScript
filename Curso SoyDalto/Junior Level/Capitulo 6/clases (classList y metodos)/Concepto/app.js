let caja = document.querySelector('.container');
let boton = document.getElementById('btn')
let titulo = document.querySelector('.title')

caja.classList.add('mt-2', 'mp-2')
/* ¿Para que sirve add?
add(), es un metodo que nos permite poder agregar alguna clase a algun objeto de tipo HTML.
Como parametro recibe una cadena, y en caso de querer agregar mas clases, se le pasa mas cadenas. */

caja.classList.remove('container')
/* ¿Para que sirve remove?
remove() nos permite poder remover alguna clase de un objeto de tipo HTML. */

caja.classList.replace('mp-2', 'container')
/* ¿Para que sirve replace?
replace() nos permite poder reemplazar alguna clase de un HTMLElement por otra clase CSS. */

boton.addEventListener('click', () => {
    titulo.classList.toggle('activo')
    if (titulo.classList.contains('active')) {
        console.log('control')
    } else {
        console.log('olalala')
    }
    /* ¿Para que sirve toggle?
    toggle() nos permite poder palanquear entre dos de un HTMLElement por otra clase CSS. */
})
