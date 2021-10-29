var switcher = true;

while (switcher == true) {
    let edadPersona = parseInt(prompt('Ingrese su edad:'), 10);
    if (isNaN(edadPersona)) {
        alert('Ingrese una edad valida.');
    } else {
        if (edadPersona > 17) {
            evaluarIngreso(edadPersona);
            let repetidor = confirm('¿Desea seguir con el programa?');
            if (repetidor == false) {
                switcher = false;
            } else {
                console.log('ok mano');
            }
        } else {
            alert('Usted no es mayor de edad.');
        }
    }
}



