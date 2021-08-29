# Repositorio de aprendizaje en JavaScript

Este es un repositorio dedicado a mi aprendizaje en javascript, con tal de prevalecer todas mis investigaciones, practicas, analisis y comentarios acerca del lenguaje y todas sus posibilidades.

## CAPITULO 1

### Introduccion a JavaScript:

En los inicios del auge en los sitios web, existian lenguajes como html y css, con el cual podiamos estructurar, maquetar y diseñar nuestros sitios web para posteriormente subirlos a la web.

En ese auge, surgio un problema, mas que un problema surgio la necesidad de añadir interactividad a estos sitios web estaticos, debido a esto nace JavaScript, un lenguaje interpretado que surge como una solucion a una necesidad y que ahora se ha convertido en uno de los lenguajes mas potentes hoy en dia.

JavaScript es un lenguaje de programacion mutliparadigma, interpretado por los navegadores y tambien tiene la posibilidad de ser compilados (ya sea en el servidor o en el lado del cliente) a traves de entornos de ejecucion como node.js, hoy en dia, JavaScript es mas de lo que para lo que surgio inicialmente. 

### Caracteristicas de JavaScript:

- Es un lenguaje orientado a objetos
- Funciona a traves del paradigma imperativo (uno por uno de manera sincrona)
- Es case sensitive (es sensible a las letras mayusculas y minusculas, entiende de diferentes maneras lo minusculo y lo mayusculo)
- Es de tipado debil (una variable puede ser interpretada como un int y luego puede ser un string tranquilamente.)
- Es un lenguaje dinamico (se relaciona a lo anterior) porque las variables se adaptan a sus valores.
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






