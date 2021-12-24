class PersonaNatural {

    // Si queremos trabajar codigo limpio y declarar las variables que se instanciaran en el constructor,
    // podemos hacerlo de la siguiente manera: 


    // Propiedades de la clase:
    nombre    ;
    apellidos ; 
    edad      ;
    profesion ;
    comida    ;

    // Propiedad estatica:
    static contadorInstancias = 0; // Util para llevar un conteo de la cantidad de veces que se instancia 
                                   // la clase.    

    // El constructor es algo que se inicia siempre que se instacia una clase en JS y en cualquierde la
    // otro lenguaje orientado a objetos.
    // Basicamente, es lo que 'construye' a la clase.
    constructor(nombre = null, apellidos = null, edad = null, profesion = null, comida = null) {

        // Si queremos manejar buenas practicas y mostrar avisos de que no se ha instanciado nada, podemos
        // hacer lo siguiente:
        // USAR UN THROW O UN CONSOLE.ERROR.
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.profesion = profesion;
        this.comida = comida;
        PersonaNatural.contadorInstancias++;

    }

    // Setters:
    set setNombre(nombre) { this.nombre = nombre; }
    set setApellidos(apellidos) { this.apellidos = apellidos; }
    set setEdad(edad) { this.edad = edad; }
    set setProfesion(profesion) { this.profesion = profesion; }
    set setComida(comida) { this.comida = comida; }

    // Getters:
    get getNombre() { return this.nombre; }
    get getApellidos() { return this.apellidos; }
    get getEdad() { return this.edad; }
    get getProfesion() { return this.profesion; }
    get getComida() { return this.comida; }

    // Get static:
    static get getContadorInstancias() { return `Cantidad instancias de la clase: ${this.contadorInstancias}`; }

    // Metodo estatico:
    static saludar() {
        return 'Hola desde persona natural.'
    }

    presentacion() {
        console.log(`Me llamo ${this.nombre} ${this.apellidos}.`);
    }

}