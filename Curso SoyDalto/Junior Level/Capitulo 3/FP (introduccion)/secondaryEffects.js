var saludo = 'hola';

console.log(saludo);
function saludar(data) {
    saludo = 'que fue';
    console.log(data);
}

saludar(saludo);
console.log(saludo);