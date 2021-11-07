let raza = 'humano';

let arrayCaracteresRaza = raza.split('');
arrayCaracteresRaza.pop();
arrayCaracteresRaza.push('a');

let razaCambiada = arrayCaracteresRaza.join('');

var perrito = new Animal('chinga rata', 39, razaCambiada, 'red');
console.log(perrito.info);