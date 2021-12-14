const miFuncion = x => x > 0 ? x + 1 : x - 1; // Condicional if - else.

console.log(miFuncion(10));

const miFuncion2 = x => x > 0 ? x + 1 : x == 0 ? (x + 10)*10 : x ; // Condicional if - else if - else.

console.log(miFuncion2(-10))
