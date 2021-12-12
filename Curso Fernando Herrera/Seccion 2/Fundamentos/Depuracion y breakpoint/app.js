let a = 10,
    b = 10,
    c = 10,
    x = a + b,
    d = 'Hola',
    e = 'Spiderman';

     console.log('a =', x);
     console.log('b =', x);
     console.log('c =', x);

     
    console.log({a})
    console.log({b})
    console.log({c})

    console.log('%c Mis variables', 'color: aqua; font-weight: bold;');
    console.table({a, b, c, x});

    console.log('%c Mi cadena', 'color: red; font-weight: bold;');
    
    const saludo = `${d} ${e}`;
     console.log(saludo);
