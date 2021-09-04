## Operadores de comparacion

Se usan cuando queremos comparar datos entre ellos.

Devuelven o true, o false, todos los tipos de operadores de comparacion.

Operadores mas usados:

- == iguales
- != diferentes
- !== estrictamente diferentes

Ejm de porque se usaria:

```js
var numero = 20;
var texto = "20";

console.log(numero !== texto);
```
Si no usamos el estrictamente diferente, daria false, porque 20 y 20 (en cadena) serian relativamente iguales.

- === estrictamente iguales (pasa lo mismo que con los estrictamente diferentes)
- **>** 
- **<**
- **>=** 
- **<=**

### Relacion con condicionales 

Al saber que las comparaciones logicas y de comparacion siempre devuelven valores booleanos, se presta a comprender de mejor manera los condicionales if, else, else if.

#### if

Si la condicion es true, procede el if.

#### else

Si la condicion de if es false, procede el else.

#### else if

Si la condicion de if es false, y la condicion de else if es true, procede el else if.

