var arregloDeVariasCosas = [1, true, "como", 90, "goku", "vegeta", 10, 11];
var arregloResultados = [];

for (var i = 0; i < arregloDeVariasCosas.length; i++) {
    if (typeof arregloDeVariasCosas[i] === "number") {
        arregloResultados.push("number");
    } else if (typeof arregloDeVariasCosas[i] === "boolean") {
        arregloResultados.push("boolean");
    } else if (typeof arregloDeVariasCosas[i] === "string") {
        arregloResultados.push("string");
    }
}

console.log(arregloResultados);