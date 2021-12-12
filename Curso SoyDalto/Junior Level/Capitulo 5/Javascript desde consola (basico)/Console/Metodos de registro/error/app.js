// Sirve para mostrar un mensaje de error por consola.

const suma = () => {
    let numA, numB;
    numA = document.getElementById('txtNumA');
    numB = document.getElementById('txtNumB');
    try {
        // let a = parseInt(numA.value);
        // let b = parseInt(numB.value);
        return console.info(a + b);
    } catch (error) {
        console.error(`Cometiste un error causita, aqui esta tu error: ${error.message}`);
    }
};

let boton = document.getElementById('btnEjecutar');
boton.addEventListener('click', () => {
    suma();
});

// Evidentemente a no esta definido, es por eso que el try se va para el catch con el cual podemos ha_
// cer que se muestre un error con el objeto console. Esto puede ser de mucha ayuda para depurar.