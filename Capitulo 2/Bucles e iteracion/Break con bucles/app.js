var contador = 0;
var botonAguante = document.getElementById('btnAguante');
var contenedorInfo = document.getElementById('contenedorInfo');

botonAguante.addEventListener('click', function(e) {
    let controladorBucle = true;
    contador++;
    while (controladorBucle == true) {
        if (contador > 5) {
            break;
        }
        contenedorInfo.innerHTML = `<p>${contador}</p>`;
        controladorBucle = false;
    }
});