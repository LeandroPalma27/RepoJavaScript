const miObjeto = {
    interpretes_spiderman: ['Tobey', 'Andrew', 'Tom'],
    edades: [45, 38, 25]
};

/* 
Como es una constante, puede que pensemos que no se pueden añadir propiedades, modificar valores o borrar
propiedades, sin embargo esto es completamente posible: 
*/

miObjeto.trilogias = [true, false, true];

console.log(miObjeto);

delete miObjeto.trilogias; // Hasta este punto no deberia haber ningun error.

console.log(miObjeto);

// ¿Entonces, como una constante afectaria en la declaracion de un objeto?

miObjeto = ['Tobey']; // Esto marcaria error, ya que por ser constante no se podria volver a ASIGNAR algo.

console.log(miObjeto);


