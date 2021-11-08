## ¿Cual es la diferencia entre heredar e importar una clase?

### HERENCIA

Cuando hablamos de herencia, nos referimos directamente a la progrmación orientada a objetos. Esto debido a que la idea y vision de programar con este estilo, se basa en las cosas de la vida real.

Cuando heredamos una clase, esta automaticamente se convierte en la clase padre de esa clase que la esta heredando. Siendo un lio de cosas, queda mejor decir que las clases que heredan otras clases se convierten en subclases de la clase que estan heredando.

Al ser como las hijas de la clase padre, estas son muy similares a las clases padre, heredando constructores, metodos, atributos, etc. Ya en las subclases se agregarian cosas especificas que distinga a esa subclase de las demas subclases.

CABE RECALCAR que el uso de todas estas tecnicas y formas de programar se hacen con la finalidad de tener un codigo mas limpio, entendible y escalable. Con esto tambien aprendemos a manejar las mejores practicas de programacion.

### IMPORTACION

Cuando importamos una clase, lo que hacemos es simplemente permitir la poisibilidad de instanciar un objeto de aquella clase, con la finalidad de que a traves de ese objeto se puedan acceder a los metodos de esa clase.

En programacion funcional esto es de gran ayuda, ya que nos evitaria tener que idear como conseguir algo y en ves de eso nos centrarimos en buscar un resultado a traves de clases y funciones ya existentes.

Ejm:

Previamente se importo la clase que contiene el metodo "suma()" (este metodo es estatico).
```java
public double accionSuma(double a, double b) {
    double[] arrayNumeros = {a, b};
    double resultado = suma(arrayNumeros);
    return resultado;
}
```