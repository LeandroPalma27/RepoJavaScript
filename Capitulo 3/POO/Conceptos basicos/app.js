let raza = 'humano';

let arrayCaracteresRaza = raza.split('');
arrayCaracteresRaza.pop();
arrayCaracteresRaza.push('a');

let razaCambiada = arrayCaracteresRaza.join('');

var animal = new Animal();

var humano = new Animal('chinga rata', 39, razaCambiada, 'red');
// Para crear mas objetos de la clase, simplemente creamos mas variables;
var gato = new Animal('gata fiera', 4, 'cat', 'yellow' );

var perro = new Animal('lucas', 5, 'perro', 'black');

document.write(humano.mostrarInformacion() + '<br>');

let razaPerro = perro.raza;
let razaGato = gato.raza;
let razaHumano = humano.raza;

let arrayResultados = [];
arrayResultados.push(razaPerro, razaGato, razaHumano);
for (let i = 0; i < arrayResultados.length; i++) {
    document.write('<div style="font-size: 30px;">'+animal.afirmarPerro(arrayResultados[i])+'</div>');
}