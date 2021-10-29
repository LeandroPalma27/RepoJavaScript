## Arrow function

Las funciones flecha son una alternativa a la manera clasica de declarar una funcion. Tienen diferencias y algunas limitaciones (se profundizara mas adelante cuando se estudie a fondo las funciones flecha).

Diferencias:

- No es obligatorio usar un nombre.
- Los corchetes y el return son opcionales (aunque en algunas situaciones seran obligatorios).
- La palabra return estara presente aunque no este declarada siempre y cuando esta funcion flecha no tenga un limite representado a traves de corchetes (estara de manera implicita).
- Su estructura principal parte de la siguiente manera (parametro, flecha y expresion):
```js

// Ejemplo sin corchetes y return (unico caso donde este esta pero de manera implicita):
(x) => x + 100;

// Ejemplo de un arrow function clasico:
const nombreDeMiFuncion = (x, y) => {
    return x + y;
}
```

Principales beneficios de usar funciones flecha:

- En caso de tener un solo parametro, no hace falta cubrirlo entre parentesis.
- En caso de tener una sola expresion para nuestra funcion, no hace falta usar corchetes, lo cual nos ahorraria tiempo y espacio de codigo (codigo mas legible), donde tambien implicitamente se retorna lo que se obtiene de dicha expresion.