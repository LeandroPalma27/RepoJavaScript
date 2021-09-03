## Concatenaciones

La concatenacion es cuando se juntan strings.

## Problema de numbers + strings

Si sumamos dos valores numericos, la respuesta seria numerica, pero si se concatena un valor string, asi sea una cadena vacia, todo se concatenara. Por lo tanto si la suma era 5 + 6 + cadena(esta vacia), la respuesta seria = 56.

### metodo concat()

Este metodo sirve para poder concatenar strings, pero si o si se necesita tener alguna cadena en la concatenacion.

### Concatenar con backtick

Si usamos backticks, podemos concatenar cadenas de la siguiente manera:

```js
var titulo = "Spider";
var titulo2 = "-man 4";

var titulo3 =  `El nombre de la pelicula es: ${titulo}${titulo2}`;
console.log(titulo3);
```

### Escape de backticks

Supongamos que tengo este codigo js:

```js
var cadena = "Hola amigos como estan, yo soy "Leandro"";
```

Obviamente, se generaria un error, ya que no se pueden tener comillas dobles dentro de una cadena, ya que la cadena se cortaria en el inicio de las comillas dobles que ponemos dentro de la cadena.

Para solucionar esto y no generar un escape de comillas, utilizamos comillas simples para la cadena principal. De igual manera si es al reves, comillas dobles para comillas simples, comillas dobles o simples para backticks.

Ejm:

```js
var cadena = 'Hola amigos como estan, yo soy "Leandro"';
```