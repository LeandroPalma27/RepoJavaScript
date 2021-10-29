var objetoRandom = {
    nombre: "LeandroPC",
    procesador: "Ryzen 7 4600x",
    ram: "16GB ram 3200mhz",
    tarjetaGrafica: "RTX 3070",
    memoria: "1TB ssd"
};


let nombre = objetoRandom["nombre"];
let procesador = objetoRandom["procesador"];
let ram = objetoRandom["ram"];
let tarjetaGrafica = objetoRandom["tarjetaGrafica"];
let memoria = objetoRandom["memoria"];

var html = `El nombre de la PC es: <b>${nombre}</b><br>
El procesador de la PC es: <b>${procesador}</b><br>
La ram de la PC es: <b>${ram}</b><br>
La tarjeta de video de la PC es: <b>${tarjetaGrafica}</b><br>
La memoria de la PC es: <b>${memoria}</b>`;

document.write(html);
