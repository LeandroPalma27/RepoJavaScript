## Polomorfismo 

Cuando hablamos de polimorfismo, los mejores ejemplos para dar son con lenguajes de tipado fuerte como Java, C#, etc.

Sabiendo esto, supongamos que tenemos una clase llamada Metrajes, que hereda a las clases Series, Peliculas, Documentales y Animaciones.

Ahora, si en alguna otra clase creamos una funcion que se llame "reproducirMetraje(Metrajes metraje)", donde claramente el parametro que recibe seria un objeto de la clase metraje, se podrian enviar solo datos de tipo Metraje. Pero gracias al polimorfismo, este metodo se torna de varias formas dependiendo el tipo de Metraje que se le envie, ya sea Pelicula o documental, recordemos que la clase Metraje hereda a varias subclases, por lo tanto este metodo puede recibir varios tipos de objetos que sean de subclases de Metraje. 

Con esto, nos podemos evitar crear las mismas funciones con diferentes parametros.

Tambien podria pasar que heredemos un metodo llamado caminar de clase Personaje a su subclase llamada Duende. En clase Personaje el metodo caminar retorna un string llamado "Camina normal", pero heredando ese metodo en la clase Duende, podemos hacer que se retorne un string que diga "Camina chueco", por lo tanto el mismo metodo reacciona segun la clase o subclase que instancie.

Ejm:

```java
/*
Esta seria la clase padre:
*/
public class Personaje {
    public String caminar() {
        return "Camina normal";
    }
}
/*
Esta seria la clase hija:
*/
public class Duende extends Personaje {
    // Heredamos el metodo caminar:
    public String caminar() {
        // En duende, este metodo retorna otra cosa diferente al metodo en la clase padre.
        return "Camina chueco";
    }
}

// Por lo tanto, tenemos el mismo metodo, pero con FORMAS DIFERENTES en funcion a la clase o subclase que instancien.
```

Tener en cuenta que la sobrecarga de metodos tambien tiene mucho que ver con polimorfismo, tambien los tipados de parametros.