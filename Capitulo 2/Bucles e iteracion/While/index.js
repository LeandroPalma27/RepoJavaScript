var programaSwitcher = true;

while (programaSwitcher == true) {
    let numeroUnoTexto = prompt("Ingresa un numero a: ");
    let numeroDosTexto = prompt("Ingresa un numero b: ");
    let numeroUno = parseInt(numeroUnoTexto, 10);
    let numeroDos = parseInt(numeroDosTexto, 10);
    let programaConfirm = confirm("¿Quiere volver a reingresar los datos?");
    if (programaConfirm == true) {
        programaSwitcher = true;
    } else if (programaConfirm == false) {
        programaSwitcher = false;
        alert(funcionMayorMenorOIgual(numeroUno, numeroDos));
    }
    function funcionMayorMenorOIgual(numeroUno, numeroDos) {
        let resultado;
        if (numeroUno > numeroDos) {
            resultado = "Numero A es mayor que numero B.";
        } else if (numeroDos > numeroUno) {
            resultado = "Numero B es mayor que numero A.";
        } else if (numeroUno === numeroDos) {
            resultado = "Los dos numeros son iguales.";
        }
        return resultado;
    }
}