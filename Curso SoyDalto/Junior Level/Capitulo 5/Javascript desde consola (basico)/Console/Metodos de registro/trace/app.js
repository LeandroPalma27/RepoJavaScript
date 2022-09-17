// Traza un seguimiento a la pila de ejecucion desde que se llama al metodo.
function foo() {
    function bar() {
        let cont = 0;
        while(cont < 5) {
            console.trace();
            cont++
        }
    }
    bar();
}

foo();