function loop(x) {
    if (x < 10000) {
        var nuevoNumero = x + 1;
        console.log(nuevoNumero);
        loop(x + 1);
    }
    return;
}
loop(0);
//Esto se hizo para probar la recursividad de las funciones al poder ser llamadas dentro de ellas (por lo menos funciona con las declarativas)