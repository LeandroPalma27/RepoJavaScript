let nombres = ['leandro', 'toti', 'lecaros', 'milla', 'chinga rata'];
nombres.edad = 20;

for (let nombre in nombres) {
    console.log(nombres[nombre]);
}

for (let nombre of nombres) {
    if (nombre == 'leandro') {
        continue;
    }
    console.log(nombre);
}