## Varaibles en javascript

Es el primer concepto de logica en un lenguaje de programacion, se debe entender al pie de la letra y a la perfeccion. (Si es posible documentar todo e investigar)

### ¿Que es una varaible en programacion?

Una variable en programacion es un espacio formado por memoria dentro de la computadora en la que esta declarada, ocupa espacio dentro de la memoria principal.

Tambien es importante que el concepto propio de la palabra variable no se olvide. Una variable, como su nombre indica, puede cambiar, variar, etc.

Una variable puede almacenar tipos de datos, como numericos (enteros, decimales), cadenas de texto, caracteres de texto, verdad o falsedad (booleanos), etc. 

Estas variables requieren una especificacion de tipo de dato al ser declaradas. En Java, para declarar un entero, codificariamos lo siguiente:

```java
int numero;
```

En c#, seria de la misma manera:

```cs
int numero;
```

**OJO:** Los string pueden almacenar datos con "", '', o ´´.

### Problema de variables en Javascript

En Javascript ocurre un problema, al ser un lenguaje de tipado debil y dinamico, podemos declarar una variable y moldearla en funcion al valor que le demos. Por ejemplo, si quisieramos declarar un entero, se podria hacer de la siguiente manera:

```js
var numero = 1;
```

O asi:

```js
numero = 10;
```

Al nosotros especificar un valor entero a la variable, el interpretador identificara ese espacio como un entero, pero tranquilamente en otra parte del codigo, podria tomar un valor de otro tipo, cambiando su forma a otro tipo de dato, por eso javascript es un lenguaje de tipado debil. Ejm:

```js
function holaMundo(){
    var numero = 10;
    console.log(numero);
    if(numero == 10){
    numero = "Hola mundo";
    alert(numero);
    }
}
```

La variable nacio como un entero, pero al final del codigo cambio su valor a una cadena, dandole forma a la variable como una de tipo cadena.

Al final del codigo, la variabla tomara la forma segun sea indicada por el desarrollador, y en el proceso puede variar. Es por eso que es un lenguaje dinamico.

Aclarado esto, pasare a explicar variables y sus tipos, a profundidad en el lenguaje de JavaScript:

### Variables en JavaScript

En javascript podemos encontrar los siguientes tipos de datos primitivos:

- Cadenas de texto 
- Numericos
- Booleanos
- Symbol (mas adelante se explica)
- Bigint (es un tipo de dato numerico para almacenar datos de forma arbitraria)
- Undefined (no definido)
- Null (aunque cada objeto creado a partir de una funcion o clase podria ser null, o cualquier tipo de estructura)
- NaN (not a number)

Los 3 ultimos nos indican algo en particular, o bien que la variable no esta definida o hay algun tipo de error. 

LAS VARIABLES se pueden declarar, inicializar y modificar a lo largo del tiempo.

#### DECLARAR variables en JavaScript

Existen 3 maneras de declarar variables en javascript, a traves de un var, let o const (las ultimas salieron junto a ecma script 6)

Declarandolas segun las posibilidades dadas, se podrian declarar de la siguiente manera:

- var:

```js
var nombre;
```

- let:

```js
let numero;
```

- const:

```js
const multiplicador;
```

#### INICIALIZAR varaibles en JavaScript

Cuando hablamos de inicializar variables, nos referimos a darle un valor a esa variable que ya ha tomado memoria dentro del sistema computacional donde se ejecuta.

En terminos simples, seria algo como esto:

```js
var numero; //declaramos
numero = 10; //inicializamos
```

#### MODIFICAR variables en JavaScript

Cuando se habla de modificar una variable en javascript, nos referimos al hecho de luego de haber inicializado una variable, cambiar su valor un algun tipo de fin.

### Tipos de variables en JavaScript

var
let
const
etc

### Scopes: teoria de variables

¿que son?
¿como funcionan?
scopes solo es un tema de variables

### Opinion de hoisting sobre varaibles por parte de Lucas Dalto

