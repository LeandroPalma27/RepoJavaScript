let array1 = ['toti', 'lecaros', 'milla', 'flores', 'jimenez'];
let array2 = ['karamanduka', 'calistenia', 'garrapata', 'huevo', 'pollo'];
let array3 = ['udemy', 'node', 'gargara', 'mostaza', 'lofi'];
let array4 = ['carta', 'agua', 'vacuna', 'barcelona', 'messi'];

let arrayDeArrays = [array1, array2, array3, array4];
let contador = 0;

buclePrincipal:
for (let elemento of arrayDeArrays) {
    // console.log(arrayDeArrays[elemento]);
    if (Array.isArray(elemento)) {
        // contador++;
        let miArray = elemento;
        for (let i = 0; i < miArray.length; i++) {
            console.log(miArray);
            break buclePrincipal;
        }
        if (contador < 2) {
            // for (let i = 0; i < miArray.length; i++) {
            //     console.log(miArray);
            //     break buclePrincipal;
            // }
        }
    }
}