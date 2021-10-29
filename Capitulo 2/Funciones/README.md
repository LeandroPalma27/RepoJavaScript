## Funciones en javascript 

Una funcion es una porcion de codigo que hace algo en especifico, a la cual se le asigna un nombre para poder llamar a esa porcion, sin necesidad de volver a escribir todo el codigo.

Existen dos formas clasicas de declarar una funcion:

```js
// <========= Primera forma =========>
function nombreDeMiFuncion() {
    let a = 1 + 4;
}
// <========= Segunda forma =========>
var nombreDeMiFuncion = function () {
    let a = 1 + 4;
}
```

Cualquiera de las dos maneras clasicas es valida.

### Hoisting sobre las funciones:

Al declarar una funcion, podemos acceder a ella "antes de que sea declarada" gracias al hoisting elevado, sin embargo, estas solo pueden ser llamadas sin son de la primera forma de declaracion clasica.

```js
// Esto si
nombreDeMiFuncion();

function nombreDeMiFuncion() {
    let a = 1 + 4;
}

// Esto no, nos dara un error.

nombreDeMiFuncion();

var nombreDeMiFuncion = function () {
    let a = 1 + 4;
}
```

### Return sobre funciones en javascript

Con return, como en cualquier otro lenguaje, podemos retornar un valor a traves del llamado de una funcion. En javascript no es necesario que se le pase de manera obligatoria un parametro a dicha funciona, para que se pueda retornar cualquier valor.

Ejemplo sin parametro:

```js
function nombreDeMiFuncion() {
    let a = 1 + 4;
    return a;
}

console.log(nombreDeMiFuncion());
// Esto mostraria por consola un valor de 5, ya que se retorna la variable a, que suma los numeros 1 + 4.
// Como vemos, no hemos pasado ningun parametro a la funcion para que esta pueda retornar un valor cualquiera.
```

Ejemplo con parametro:

```js
function nombreDeMiFuncion(a, b) {
    let suma = a + b;
    return a;
}

console.log(nombreDeMiFuncion(10, 20));
// Esto mostraria por consola un valor de 30, ya que se retorna la variable a, que suma los numeros a y b que son nuestros parametros, siendo estos 10 y 20 respectivamente.
```

**CONSEJO SI LEES DETALLADAMENTE: Una buenisima, pero increiblemente buena practica, es poder hacer un codigo limpio a traves de funciones. Si creamos una funcion para que realice cierta cosa en especifico, sin tener que juntar varias funcionalidades en una sola funcion, estamos creando a la vez un codigo mas limpio y facil de entender.**



