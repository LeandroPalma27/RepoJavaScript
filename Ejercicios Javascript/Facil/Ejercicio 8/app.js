// const factorial = (n) => n > 1 ? n * factorial(n-1) : 1;

const factorial = (n) => {
    if (n > 1) {
       return n * factorial(n-1);
    } else if (n === 1) {
        return 1;
    } else if (n === 0){
        return 0;
    } else {
        return null;
    }
}


// Mi error en ese codigo fue que llamaba a al funcion recursivamente sin detener eso en algun mommento.

console.log(factorial(10));