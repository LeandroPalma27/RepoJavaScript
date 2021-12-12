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

Aclarado esto, pasare a explicar variables y sus tipos, a profundidad en el lenguaje de JavaScript.

### Variables en JavaScript

En javascript podemos encontrar los siguientes tipos de datos primitivos:

- Cadenas de texto (son inmutables, no pueden alterarse, los caracteres no pero las asignaciones si)
- Numericos
- Booleanos
- Symbol (mas adelante se explica)
- Bigint (es un tipo de dato numerico para almacenar datos de forma arbitraria)
- Undefined (no definido) = Quiere decir que la vairable esta definida, pero no tiene valor.
- Null (aunque cada objeto creado a partir de una funcion o clase podria ser null, o cualquier tipo de estructura) = Tiene un valor nulo. En el caso de variables, es de manera intencional.
- NaN (not a number)

#### NaN

Es un tipo de dato que refiere a que no es un numero.

Se muestra cuando queremos hacer alguna operacion matematica entre datos que son de diferente tipo.

Ejm:
```js
var numero = 10;
var numero2 = pedro;
alert(numero*numero2);

//Mostraria NaN (not a number), ya que no se puede hacer una multiplicacion entre los dos datos.
```

OJO: En caso de ser suma, se podria hacer ya que se concatena.

Los 3 ultimos nos indican algo en particular, o bien que la variable no esta definida o hay algun tipo de error. 

LAS VARIABLES se pueden declarar, inicializar y modificar a lo largo del tiempo.

#### DECLARAR variables en JavaScript

Existen 3 maneras de declarar variables en javascript, a traves de un var, let o const (las ultimas salieron junto a ecma script 6)

Para declarar una variable, no hace falta darle un valor, A MENOS QUE SEA DE TIPO CONST.
Al declarar la varaible, tambien declaramos el alcance que esta tendra en el codigo (SCOPE)


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
RECORDAR QUE EL CONST NO SE PUEDE MODIFICAR.

### Tipos de variables en JavaScript

En javascript, existen 3 maneras de declarar varaibles: var, let y const. Let y const aparecieron en ECMA Script 6 y revolucionaron mucho el desarrollo web.

#### var

Existentes desde los inicios de javascript, actualmente se usan para declarar variables para uso global dentro del codigo de un script js. Tienen scope moldeable (en declaracion e inicializacion) en base a donde esten declaradas e igual sus inicializaciones. Tambien tienen HOISTING ELEVADO.

Ejemplo de uso adecuado en js:

```js
var numero=10;

function mostrarNumero(){
    if(numero==10){
        console.log("El numero es 10");
    }
}

console.log(numero); //Mostrar "10", porque el scope de la inicializacion es global al igual que la declaracion.
mostrarNumero();
```

#### let

Existe desde la liberacion de ES6, su creacion se debio a la necesidad de agregar declaciones con scope limitado al bloque en donde estan declaradas, para asi poder diferenciarlas de las otras variables.

Los let, tiene un scope moldeable (en declaracion e inicializacion) como los var, pero estos estan hechos especificamente para usa funcion. Si quieres una varaible exclusiva para un bloque (funcion), usa let.

No tienen HOISTING elevado y su inicializacion tambien tiene scope.

Ejemplo de uso adecuado en js:

```js
function mostrarNumero(){
    let numero = 10;
    if(numero==10){
        console.log("El numero es 10");
    }
    //Esta seria la manera correcta de usar un let.
}

mostrarNumero();
```

#### const

Una variable de tipo cons indica lo que dice su nombre, es una constante, algo absoluto, algo definido y que no va a cambiar a lo largo del tiempo (ejecucion del codigo).

Se usa para declarar pi, constantes matematicas, etc. 

Siempre que se declara, se debe inicializar.

Por ningun motivo, el valor de esta variable se podra inicializar despues de haberla inicializado al inicio. El script botara un error por haber incumplido la ley de las constantes.

Tienen SCOPE (como todo tipo de variables) en declaracion e inicializacion, no tienen HOISTING elevado.

Ejemplo de uso adecuado en js:

```js
const numero = 7;
mostrarNumero(); //Esto se puede hacer por el HOISTING de la declaracion de las funciones.
mostrarNumero2();
function mostrarNumero(){
    if (numero == 7){
        console.log("El numero es 7");
    }else{
        console.log("El numero es undefined");
    }
}
function mostrarNumero2(){
    if(numero==5){
        console.log("El numero es 5");
    }else{
        console.log("El numero no es 5");
    }
}
```

### Scopes: teoria de variables (afecta a declaraciones e inicializaciones (tambien a declaraciones de funciones))

IDEAS(ordenar y plasmar):

- Todas las variables tienen un scope (alcance)
- Los scope en bloques pueden ser funciones, condicionales, bucles, etc. 

#### ¿Que son?

El scope en javascript es el alcance que tiene alguna variable o inicializacion. El scope solo es un tema de variables en declaracion e inicialización.

### Opinion de hoisting sobre varaibles por parte de Lucas Dalto

Ojo: LAS INICIALIZACIONES NO TIENEN HOISTING.

### Diferencia entre var y let

En si, son casi lo mismo, con la diferencia de que let se usa exclusivamente para definir una varaible con un scope limitado a un bloque, ya sea una funcion, condicional, bucle, etc.

A var tambien le afecta el scope, pero solo se limita a el scope de un bloque de una funcion, para condicionales, bucles, etc, no tiene un scope limitado.



