const visperaNavidad = (data) => {
    if ('24/12/2021') {
        return true;
    } else {
        return false;
    }
};

let fecha = new Date();
let mesParseado = parseInt(fecha.getMonth(), 10) + 1;
let fechaHoy = `${fecha.getDate()}/${mesParseado.toString()}/${fecha.getFullYear()}`;

console.log(fechaHoy);
console.log(fecha.getDate())