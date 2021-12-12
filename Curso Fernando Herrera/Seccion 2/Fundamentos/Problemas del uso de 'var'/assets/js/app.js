let miNombre = 'Leandro';

var outherWeight = 'Leandro'; // Esto no es valido o no es buena practica.

let outherHeight = 1_000_000; // Esto es valido ya que se declaro con let.

/* 
El principal problema de las declaraciones con var es que estas se sobreescriben en el objeto global window
, con lo cual se pueden acceder a estas variables desde ahi.
Ahora, imaginen que una variable var sea declarada con el mismo nombre de alguna propiedad del objeto 
window. De ser asi ocurriria un gran problema de acceso a la informacion del objeto window de nuestra app.
*/