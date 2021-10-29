let arrayCosas = [1, true, false, "Goku", 10, "Messi", "El bicho", 5_000_000_000, 'misifu', 'tomatodo', 'avena', 'no', 'debe', 'salir', 'esto'];
let contador = 0;

for (var i = 0; i < arrayCosas.length; i++) {
    // if (!(typeof arrayCosas[i] === "string")) {
    //     continue;
    // }
    if (!(typeof arrayCosas[i] === "string")) {
        continue;
    }
    if (typeof arrayCosas[i] === "string") {
        contador++;
        if (contador > 6) {
            break;
        }
        console.log(arrayCosas[i]);
    }
}