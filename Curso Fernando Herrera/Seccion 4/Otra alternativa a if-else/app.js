// Para esto usaremos los arrays asociativos a un propiedad (objetos).

const diasSemana = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};
const objetoDate = new Date();
let dia = objetoDate.getDay();
console.log(diasSemana[dia]); // Array asociativo.
