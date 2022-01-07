# Cosas importantes del curso (seccion 3)

1. Javascript es un lenguaje de tipado debil (no indicamos que tipo de dato almacena una variable).

2. Javascript lo supone a traves de nuestras inicializaciones. 

3. Un dato inmutable refiere a que no puede modificarse, como mucho en caso de hacerlo se crean nuevas variables con los resultados o se vuelve a inicializar esa variable.

4. Los datos primitivos son datos inmutables y que a su vez no son objetos.

5. Var permite hacer doble inicializacion (otro motivo por el cual no usar var), o por lo menos lo permitia en su momento.

6. Typeof es un operador interno de JavaScript.

7. En javascript todo son objetos (arrays, objetos, json, funciones, etc), excepto los datos primitivos.

8. En javascript se maneja el camelCase.

9. Las variables con let o const no se sobreescriben en el objeto window.

10. En javascript es una buena practica crear archivos con un guion como separador en caso de tener varias palabras: mi-archivo-juego.js

11. No es buena practica colocar letras mayusculas, caracteres especiales o espacios en los nombres de los archivos.

12. No es buena practica declarar variables con caracteres especiales o con la ñ.

13. Para crear variables con numeros, es buena practica usar guion bajo para separar decimales.

14. Para variables lowerCamelCase, para clases siempre UpperCamelCase.

15. Los arrays en js tienen posibilidad de acceder a posiciones infinitas pero no todas estan ocupadas (eso dependera del desarrollador).

16. En los arreglos se pueden almacenar cualquier cosa: Operaciones matematicas, funciones, arays, etc.

17. OJO, forEach no retorna nada.

18. En javascript, los calculos que se necesiten hacer al inicio para poder dar sentido a ciertas acciones, se hacen.

19. Si quiero obtener la posicion de algun elemento en especifico, debo usar indexOf(elemento);

20. Si deseo quitar algo de un array para guardarlo en otro, puedo usar splice();

21. Javascript tiene principalmente dos tipos de datos, los primitivos y los objetos.

22. Usar los entries en los objetos puede ser de gran ayuda.

23. Declarar funciones con 'function' ya no es tan buena practica.

25. Todas las funciones que usen la palabra reservada 'function' son funciones clasicas.

26. Las funciones clasicas tienen una cosa exclusiva llamada arguments.

27. Es buena practica usar const para declara objetos.

28. La desestructuracion de objetos y arreglos son protips que pueden servir de mucho en react.

29. Tambien el buen uso del operador spread.

30. No olvidar el object freeze, getOwnPropertyNames y el values para Object.

31. Siempre consultar sin existe algun metodo que solucione lo que estamos buscando.