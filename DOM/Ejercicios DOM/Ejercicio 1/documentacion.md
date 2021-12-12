# ¿Que se puede destacar de este ejercicio?

Primero que nada, esta forma de consumir algun recurso que nos retorne informacion en JSON, es de las maneras mas puras y clasicas en javascript. Los frameworks y librerias de hoy en dia permiten hacerlo de una manera mucho mas efectiva y eficiente frente a problemas como autorizacion, autenticacion, no recarga de paginas con uso de jquery, etc.

Luego, el hecho de conocer de entrada la interfaz XMLHttpRequest, hace que se pueda comprender la manera pura del manejo de peticiones ajax en JS.

Asi como traemos informacion y construimos una tabla al cargar la pagina, podemos hacer que pequeños bloques de la pagina traigan informacion relevante desde el servidor sin necesidad de recargar la pagina, ya sea a traves de un boton o algun evento que nos permita accionar dicha peticion ajax.

## Diferencias entre este metodo clasico con algunos frameworks o librerias famosas exclusivas de frontend

Hablando de angular o react, pues claramente el manejo del consumo del servicio y la creacion y manipulacion de algunas nuevas partes del DOM es algo diferente, pero lo importante a destacar es que hemos usado los metodos clasicos para la manipulacion del DOM, metodos que aprendimos anteriormente.

Pero este uso puro y clasico del consumo de servicios rest no nos brinda apartados que cubran necesidades de autenticacion o autorizacion, por lo cual no es viable para proyectos a gran escala. Para eso se ocupa JWT.

## Diferencias con frameworks de frontend y backend como ASP o Spring Boot

En ASP, al trabajar el modelo MVDC (modelo-vista-data-controladores), podemos usar metodos de accion que nos retornen informacion del servidor usando metodos de la clase de acceso a datos, y posteriormente crear cargar las vistas en funcion a la logica del proyecto.

La informacion se carga a traves de la clase modelo.

En spring...

