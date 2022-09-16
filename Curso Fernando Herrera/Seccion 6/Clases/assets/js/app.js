

const printPyramid = (pisos) => {
    for (let i = 1; i < pisos; i++) {
        strLateral = ' '.repeat(pisos-i)
        strCentral = "*".repeat(i*2 - 1)
        console.log(strLateral+strCentral+strLateral)
    }
}

printPyramid(10)