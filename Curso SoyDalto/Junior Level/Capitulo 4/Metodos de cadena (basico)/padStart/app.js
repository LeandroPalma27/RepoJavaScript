let cadena = "dalto";
console.log(cadena.padStart(7, "Soy "));

//Explicacion: Primero que nada debemos aclarar que no es un metodo oficial reconocido por ECMA.
//             Este metodo lo que hace es rellenar al principio de una cadena alguna otra cadena que le
//             pasemos por parametro. El metodo recibe dos parametros: La cantidad el tamaño de la nueva
//             cadena (contando el tamaño de la cadena sin modificar) y el relleno que se le pondra.