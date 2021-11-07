## Functional programming

Es una paradigma de la programacion que se basa en la programacion declarativa. Nos centramos mas en que es lo que estamos buscando obtener y no en como lo vamos a obtener. Con este paradigma se busca no usar ciclos o condicionales.

Este paradigma es muy usado al momento de desarrollar software de cualquier nivel, ya que al usar la programacion declarativa nos estaremos centrando en usar un conjunto de funcionalidades con el fin de buscar como obtener algo en cuestion, dejando de lado el como estos se obtienen (se requiere un gran pensamiento logico).

Aqui, las funciones son tratadas como personas y estas tendran caracteristicas en base a sus entradas y salidas, por ejemplo si una funcion recibe como parametro a otra funcion, la primera seria tratada como funcion de orden superior.

Conceptos basicos de FP:

- FUNCIONES PURAS: Son aquellas funciones que retornan el mismo input que recibieron, es decir que el input y el output terminan siendo los mismos.

Ejm:

```js
// <============== Primer ejemplo ===============>
// No recibe ningun input
function limpiarInput() {
  let input = document.createElement("input");
  if (!(input.value == null)) {
    input.value = null;
  }
}
// Su output es el mismo, nada.

// <============== Segundo ejemplo ===============>
// La entrada es un valor bool
function disparador(data) {
  let gatillo = data;
  if (gatillo == true) {
    descontarMunicion();
    return true;
  } else {
      return false;
  }
}
// Y la salida tambien es un valor bool.
```

- ESTADO COMPARTIDO: El estado compartido es cuando el ambito de alguna declaracion de variables o lo que sea se comparte entre todo el codigo, con la finalidad de poder usarlo para otras funciones, clases, etc.

- DATOS MUTABLES E INMUTABLES:

Los datos mutables son aquellos objetos o variables que tienen la posibilidad de poder cambiar en funcion a algunos metodos o lineas de codigo que lo busquen o lo hagan de por si.

Los datos inmutables NO TIENEN esta carateristica, por ejemplo una variable tipo var o let jamas seria un dato inmutable, una constante sí.

- EFECTOS SECUNDARIOS:

Esto se explica mejor con un codigo.

```js
var saludo = 'hola';

console.log(saludo);
function saludar(data) {
    saludo = 'que fue';
    console.log(data);
}

saludar(saludo);
console.log(saludo);
```

Como se observa, una variable de ambito global se ha modificado, cosa que en este paradigma se evitar por completo ya que se busca tener un codigo facil de comprender.


