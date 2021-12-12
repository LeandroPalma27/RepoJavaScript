const multiplicarSinOperador = (a, b) => {
    if (a === 0) return 0;
    if (b === 0) return 0;
    if (a === 1) return b;
    if (b === 1) return a;
    if (a === -1) return -b;
    if (b === -1) return -a;
    if (Math.sign(a) === -1 && Math.sign(b) === 1) return a + multiplicarSinOperador(a, b - 1);
    if (Math.sign(b) === -1 && Math.sign(a) === 1) return b + multiplicarSinOperador(a - 1, b);
    if (Math.sign(a) === -1 && Math.sign(b) === -1) return (-a) + multiplicarSinOperador((-a), (-b) - 1);
    return a + multiplicarSinOperador(a, b - 1);
    // Lo que sucede aqui es que se cuenta el numero 'a' (o 'b') + el mismo numero pero con su factor 
    // pero reducido en 1, asi hasta que se llegue 1 para que se retorne el numero 'a' (o 'b'). Ahi se 
    // detendria la funcion recursiva ya que en el ultimo retorno no se vuelve a llamar a a funcion, solo
    // se retorna a o b, quedando: a + a + a (en caso de haber sido a multiplicado por 3 veces). 
};

console.log(multiplicarSinOperador(-8, -1.5));

// Como se haria con bucles: 

const multiplicarSinOperadorConBucles = (a, b) => {
    let cont = 0;
    if (b > 0) {
        while (b > 0) {
            cont += a;
            b--;
        }
        return cont;
    }
    if (b === 0) return 0;
    if (Math.sign(a) == -1 && Math.sign(b) == -1) {
        while (b < 0) {
            cont += a;
            b++;
        }
        return -(cont);
    }
};

console.log(multiplicarSinOperadorConBucles(-8, -1.5));

// TODO: Solucionar tema segundo factor cuando es decimal (dos factores decimales) en funcion recursiva.
// TODO: Lo mismo de arriba pero en la segunda funcion (no permite que el segundo factor sea decimal).