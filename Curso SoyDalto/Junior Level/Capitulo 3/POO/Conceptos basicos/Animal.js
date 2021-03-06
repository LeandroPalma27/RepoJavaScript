// De esta manera se crea una "clase" en javascript.
// Las clases requieren un metodo constructor que las construya, valga la redundancia.
// No son obligatorias, ya que estos metodos dependeraran de que es lo que se busque con la clase.

class Animal {
    // Constructor
    constructor(nombre, edad, raza, color) {
        // En caso de que se llame al constructor a traves de un objeto, con this podemos asignar propiedades al 
        // objeto, para asi poder asignar los valores con los que instanciaremos a la clase.
        this.nombre = nombre;
        this.edad = edad;
        this.raza = raza;
        this.color = color;
        this.info = `El nombre de este animal es ${this.nombre}, tiene ${this.edad} años de edad y su raza es ${this.raza}.`
    }
    //<====================De esta manera se crean metodos=====================>

    // NO HACE FALTA hacer referencia al this, este solo se usa para el constructor(para referirnos al objeto que 
    // instancia la clase):
    mostrarInformacion() {
        return this.info;
    }
    afirmarPerro(raza) {
        let razaEspecie = raza;
        if(razaEspecie == 'perro'){
            return 'Jaja tienes un perrito.'
        } else {
            return 'No tienes un perrito :c';
        }
    }
}