// Traza un seguimiento a la pila de ejecucion desde que se llama al metodo.
function foo() {
    function bar() {
        console.trace();
    }
    bar();
}

foo();