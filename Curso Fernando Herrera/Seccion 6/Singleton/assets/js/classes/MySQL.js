class MySQL {

    static #instance; // Por defecto es undefined
    port;
    username;
    password;

    constructor(port = null, username = null, password = null) {

        if (!!MySQL.#instance) { // Si esta undefined se niega, dando true, y al volver a negarse se convierte en false (lo cual tiene sentido ya que se generaria una instancia).
            return MySQL.#instance;
        }

        MySQL.#instance = this; // Se hace referencia a las propiedades para la instancia unica de la 
                                // clase.
        this.port = port;
        this.username = username;
        this.password = password;

        return this;

    }

}

const mySql = new MySQL(3306, 'admin', '1234');
const mySql2 = new MySQL(3306, 'choclito', '1234');

console.log({mySql});
console.log(mySql2.username); // Esto dara admin ya que al tener singleton, siempre se retornara la
                              // la primera instancia realizada.

if (!!'instancia') { // Si fuera undefined llegaria al else
    return console.log('instancia');
} else {
    return console.log('nueva instancia')
}