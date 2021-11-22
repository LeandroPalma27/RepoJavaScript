var objetoRandom = new Object();

objetoRandom.nombre = "LeandroPC";
objetoRandom.procesador =  "Ryzen 7 4600x";
objetoRandom.ram = "16GB ram 3200mhz";


let nombre = objetoRandom["nombre"];
let procesador = objetoRandom["procesador"];
let ram = objetoRandom["ram"];

console.log(nombre);

// var html = `El nombre de la PC es: <b>${nombre}</b><br>
// El procesador de la PC es: <b>${procesador}</b><br>
// La ram de la PC es: <b>${ram}</b><br>
// La tarjeta de video de la PC es: <b>${tarjetaGrafica}</b><br>
// La memoria de la PC es: <b>${memoria}</b>`;

// document.write(html);
