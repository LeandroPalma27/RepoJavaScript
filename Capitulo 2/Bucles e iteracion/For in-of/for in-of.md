## For in y for of

Son una manera peculiar de usar los bucles for, con la cual podemos simplificar la manera de usarlos al momento de declarar e inicializar todas sus partes.

Por ejemplo, un bucle for normal podria ser asi:

```js
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

Pero con "for in" o "for of", podemos usar este bucle para recorrer algun objeto o array sin la necesidad de hacer lo anterior, haciendose en su parte de la siguiente manera:

```js

// Bucle for in:
let numeros = [1,2,3,4,5];

for (let numero in numeros) {

}

// Bucle for of:
let nombres = ['toti', 'milla', 'cabrera'];

for (let nombre of nombres){

}
```

Donde lo primero seria la declaracion del iterador y lo despues seria el recorrido a todo el array (sin la necesidad de saber u obtener el tamaño de ese array en especifico (se ira aumentando el iterador en cada recorrido))

### Diferencia entre for in y for of:

- Cuando se usar in, se muestra el indice, por lo tanto se debe indicar con un corchete el iterador al querer mostrar los datos del array.
- Mientras que con un of, no hace falta, solo se coloca la variable que se usa como iterador, quedando de la siguiente manera:

```js

// Bucle for in:
let numeros = [1,2,3,4,5];

for (let numero in numeros) {
    console.log(numeros[numero]);
}

// Bucle for of:
let nombres = ['toti', 'milla', 'cabrera'];

for (let nombre of nombres) {
    console.log(nombre);
}
```

### Tengamos en cuenta que:

El for in, al recorrer los indices y mostrarlos, tambien considerara a las propiedades de ese array u objeto en cuestion. Si mostramos solo el indice, se cargaran las propiedades en el recorrido, pero si usamos el array con el indice dentro de sus llaves, se mostrara el valor de esa propiedad que se agrego anteriormente.