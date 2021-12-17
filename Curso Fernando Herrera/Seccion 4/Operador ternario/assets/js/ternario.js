const objeto = new Date();
const dia = objeto.getDay();

const diaSemana = (day) => day == '1' ? 'Lunes'     : 
                           day == '2' ? 'Martes'    : 
                           day == '3' ? 'Miercoles' : 
                           day == '4' ? 'Jueves'    : 
                           day == '5' ? 'Viernes'   : 
                           day == '6' ? 'Sabado'    :  
                           day == '7' ? 'Domingo'   : 
                           null;


document.write(diaSemana(dia)); 

let horaApertura;
let mensaje;

horaApertura = [0, 6].includes(dia) ? 9 : 11;
mensaje = horaApertura >= 9 || horaApertura >= 11 ? 'Bienvenido.' : `Esta cerrado, regrese a las ${horaApertura}`

console.log({horaApertura, mensaje});
