let caja = document.querySelector('.queen')
let boton = document.getElementById('btnCreate')

boton.addEventListener('click', () => {
    let elemento = document.createElement('h2')
    caja.appendChild(elemento)
    /* El metodo createElement() permite crear objetos de tipo HTMLElement que sean reconocidos por la etiqueta.
    Este metodo va de la mano con el metodo appendChild(), que permite poder añadir esos nodeElements a algun 
    nodo padre. */
    elemento.innerHTML = '<p>Hola mundo</p>';
})
