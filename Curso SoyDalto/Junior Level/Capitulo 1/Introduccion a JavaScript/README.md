# Repositorio de aprendizaje en JavaScript

Este es un repositorio dedicado a mi aprendizaje en javascript, con tal de prevalecer todas mis investigaciones, practicas, analisis y comentarios acerca del lenguaje y todas sus posibilidades.

## CAPITULO 1

### Introduccion a JavaScript:

En los inicios del auge en los sitios web, existian lenguajes como html y css, con el cual podiamos estructurar, maquetar y diseñar nuestros sitios web para posteriormente subirlos a la web.

En ese auge, surgio un problema, mas que un problema surgio la necesidad de añadir interactividad a estos sitios web estaticos, debido a esto nace JavaScript, un lenguaje interpretado que surge como una solucion a una necesidad y que ahora se ha convertido en uno de los lenguajes mas potentes hoy en dia.

JavaScript es un lenguaje de programacion mutliparadigma, interpretado por los navegadores y tambien tiene la posibilidad de ser compilados (ya sea en el servidor o en el lado del cliente) a traves de entornos de ejecucion como node.js, hoy en dia, JavaScript es mas de lo que para lo que surgio inicialmente. 

### Caracteristicas de JavaScript:

- Es un lenguaje orientado a objetos
- Es case sensitive (es sensible a las letras mayusculas y minusculas, entiende de diferentes maneras lo minusculo y lo mayusculo)
- Es de tipado debil (una variable puede ser interpretada como un int y luego puede ser un string tranquilamente.)
- Posee un estandar en codificacion, que esta sustentado por los desarroladores de ECMA, con el fin de mantener una misma direccion en el tipo y estandar de codificacion en Javascript (ECMAscript), actualmente existe la version 10, pero la mas usada es ES6 debido a que es la version que soportan todos los navegadores de hoy en dia. 

#### ES. NEXT

Significa EcmaScript Next, y se refiere a las futuras versiones de ecma que estaran por salir. Se tiene en cuenta para poder conocer caracteristicas propuestas, cambios, ajustes, etc. Tiene un fin de ir evaluando los cambios para poder tener una version estable y segura. 

Solo se abarcan propuestas ya que aun no estan aceptadas y finalizadas.

### Usos de JavaScript:

- Dinamismo en los sitios o aplicaciones web.
- Desarrollo en el lado del servidor con node.js (creacion de apis, validacion, servicios web, etc).
- Desarrollo de tecnologias como React, Angular, Vue, con el fin usarlas como librerias y/o frameworks para poder crear sitios o aplicaciones web con las ventajas que estas tecnologias nos ofrezcan.
- Desktop development (con electron.js)
- Animaciones (gsap.js)
- Mobile development con React Native 
- Entre muchos otros mas...

### Formas de usar JavaScript

- En linea

Ejm:

```html
<h1 onclick="alert('hola');">Hola</h1>
```

- Con un script

Ejm:

```html
<body>
    <p onclick="cambiarColor()" id="p">HOLA AMIGOS COMO ESTAN</p>
    <script type="text/javascript">
        function cambiarColor() {
            var xd = document.getElementById("p");
            xd.style.color = "blue";
        }
    </script>
</body>
```

Se obtiene como resultado que al hacer click en el p, se cambia el color de negro a azul.

- Con archivo .js

Ejm:

```html
<!DOCTYPE html>
<html>

<head>
    <script src="../js/index.js" type="text/javascript"></script>
    <title>Document</title>
</head>

<body>
    <p onclick="cambiarColor()" id="p">HOLA AMIGOS COMO ESTAN</p>
</body>

</html>
```

```js
function cambiarColor() {
    var xd = document.getElementById("p");
    xd.style.color = "blue";
}
```

### COMO se EJECUTA y FUNCIONA javascript

Como ya sabemos, javascript es un lenguaje interpretado (que tambien podria compilarse en un entorno de ejecucion), pero su funcionamiento es igual en cualquier entorno. Se ira ejecutando linea por linea.

Esto, permite que interpretemos su funcionamiento como si se tratara de una pila de procesos, en el cual se ira ejecutando linea por linea todo el codigo segun corresponda el sentido logico dado al script en cuestion.

Al iniciar un script de Javascript, se crea un contexto global que abarca todo el codigo que se ira ejecutando en forma de pila de ejecucion.

Si existen funciones dentro del script, estas funciones crearan su contexto particular, que de igual manera estarn contenidos dentro del contexto global.

Supongamos que tenemos un script de la siguiente manera:

```js
var numero = 7;
function mostrarNumero(){
    console.log(numero);
    if(numero == 7){
        numero = "Soy un numero 7";
        console.log(numero);
        numero = 7;
    }
}
function cambiarNumero(){
    if(numero == 7){
        numero = 9;
        console.log(numero);
    }else{
        console.log("el numero conservo su estado string");
    }
}

mostrarNumero();
cambiarNumero();
```

El contexto global se crea, que abarca la declaracion e inicializacion de la variable, luego la creacion de los contextos particulares para las funciones (para sus respectivas funcionalidades), y para finalizar el llamado a las dos funciones. 

El CONTEXTO GLOBAL seria numericamente ordenado de la siguiente manera:

1. Declaracion e inicializacion de la varaible numero
2. Creacion de contexto particular para la primera funcion
3. Creacion de contexto particular para la segunda funcion 
4. Llamado a la primera funcion
5. Llamado a la segunda funcion

Pero la pila de ejecucion funcionaria asi:

1. Primera funcion: mostrarNumero();
   (Se crea contexto particular para ir ejecutando en forma de "subPILA" lo que contenga la funcion)
2. Segunda funcion: cambiarNumero();
   (Se crea contexto particular para ir ejecutando en forma de "subPILA" lo que contenga la funcion)
3. Si todo a sido con exito, al finalizar se iran eliminando las cosas hechas para liberar memoria.

#### Dilema de js por ser un lenguaje de tipado debil

Ahora, si es js es posible inicializar una variable y luego declararla, ¿se imaginan los dolores de cabeza que podria causar a las personas que recien estamos conociendo y aprendiendo el lenguaje?

Seria todo un lio, pero para esto estoy aqui.

Imagina que tienes un script de js de la siguiente manera:

```js
function mostrarNumero(){
    numero = 7;
    console.log(numero);
    if (numero == 7){
        console.log("El numero es 7");
    }else{
        console.log("El numero es undefined");
    }
}
mostrarNumero();
var numero;

//Da como resultado en consola un 7, y una cadena "El numero es 7"
```

¿Como es posible que la funcion pueda detectar a la varaible numero, si aun no esta declarada al momento de ser llamada? 
¿Como es posible que se pueda inicializar la variable sin siquiera haber sido declarada?

Esto se responde con la palabra HOISTING, que en español quiere decir elevacion o algo asi.

#### HOISTING 

La cosa es que dentro de este concepto, se relaciona el tema del contexto global, la pila de ejecucion, etc. 

Una de las cosas primordiales de entender sobre hoisting, es que permite que las declaraciones ya sea de variables, funciones, etc, se eleven al inicio del contexto global de javascript. No importa si estas estan al final o donde sea, se elevaran al inicio del contexto para garantizar una ejecucion logica.

Entonces, en el script anterior, se sobrentiende que js por su mismo funcionamiento movera las declaraciones al inicio del contexto global, conformando asi una pila de ejecucion logica y correcta.

##### ¿Que pasa con variables de tipo let y const?

Para empezar, un const debe inicializarse si o si al ser declarado, entonces explicar el dilema del hositing por alcances, pila de ejecucion o contextos, no tiene mucho sentido.

Con let pasa algo similar, al tener un alcance local(scope), no tiene sentido meterse en el dilema de hoisting ya que los let se ocupan de manera logica para algun tipo de funcion, y siempre se declaran al inicio de estas ya que su alcance es local al igual que sus scopes.

#### ¿Por que no olvidar el concepto de hoisting?

Es importante no olvidar el concepto de hoisting para poder tener buenas practicas de programacion en javascript. Al final, los scopes y elevaciones siempre se van a respetar, aunque puedas poner un var para algo importante en la linea 9999 de un script de 10000 lineas de codigo, no es una buena practica.

Si ese var es para la mayoria de funciones, lo pones al inicio. Si es para una funcion en especifico lo pones al inicio o usas un let.


VAR USA HOISTING (y se usa para usos globales)
LET NO USA HOISTING (se usa para usos locales dentro de llaves {let numero;})
CONST NO USA HOISTING (se usa para declarar una variable que no queremos modificar en el tiempo)

#### Conclusion sobre hoisting

Al final es facil entender que las declaraciones se elevan tanto como para var's y funciones, pero fisicamente no es asi, lo que sucede que en el contexto global las declaraciones siempre se tomaran al inicio para poder gestionar un uso de memoria eficiente. 

Ademas, solo se "elevan" declarariones mas no inicializaciones.

#### OJO:
En una variable se puede inicializar una funcion. Pero el hoisting no esta presente en este caso, no se podria inicializar la funcion antes de declararla como una funcion declaracion.

#### OJO2:
Dentro de un metodo, se puede declarar una funcion (funcion dentro de un metodo)







