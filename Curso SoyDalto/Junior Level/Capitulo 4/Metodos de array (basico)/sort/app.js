let abecedarioCadena = 'fbcdiaghejzlmnyopqvsturwxk';
let abecedarioArray = abecedarioCadena.split('');
console.log(abecedarioArray);
abecedarioArray.sort();
console.log(abecedarioArray);

// Explicacion: Este metodo lo que hace es ordenar los elementos de un array en funcion a Unicode, que es
//              disposicion de un estandar de caracteres. El metodo ordena en funcion al orden de esta di_
//              spocicion. 
//              Si algun caracter no se encuentra en esta disposicion, se colocara al final del array.