const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;
const soyTrue = true;


console.log((soyUndefined || soyUndefined || 'soyNull' || soyFalse) && soyFalse); // Ojo con esta logica.