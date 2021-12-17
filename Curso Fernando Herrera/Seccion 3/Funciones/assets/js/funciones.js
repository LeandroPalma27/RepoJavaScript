saludar();

// Manera clasica de declarar funciones (no recomendada ya que puede que por una declarion var, la funcion 
// no sea reconocida ya que existe una variable con el mismo nombre, y al llamar a la funcion marcaria un 
// error extraño.)

function saludar() { // Si declaramo algo con let que tenga el mismo nombre, se marcara un error en esta 
    // funcion. 'Ya existe una declaracion con el mismo nombre (error mas entendible).
    console.log(arguments);
    console.log('Hola xd');
}


const miConsoleLog = (x) => console.log(x);
miConsoleLog('Hola');

// Una funcion anonima seria:

let objeto = {
    miFuncionAnonima: function () {
        console.log('Hola mundo')
    }
}

document.write(objeto.miFuncionAnonima);