class Heroe extends PersonaNatural {
    
    saga;
    
    // Constructor de una clase hija:
    constructor(nombre, apellidos, edad, saga) { // De todas maneras lleva los parametros requeridos por
                                                // la clase hija.

        // Antes de usar la palabra reservada this, debe ir el super (si es clase hija):
        super(nombre, apellidos, edad);
        this.saga = saga;

    }

    // Polimorfismo:
    presentacion() { // Metodo de hijo.

        console.log(`Me llamo ${this.nombre} ${this.apellidos}, mi saga es la de ${this.saga}.`);

        // Si quiero usar el metodo de la clase padre:
        super.presentacion(); // Metodo de padre.

    }

}

const leandroman = new Heroe('Leandro', 'Palma Alvarado', 20, 'Raimi');

leandroman.presentacion();