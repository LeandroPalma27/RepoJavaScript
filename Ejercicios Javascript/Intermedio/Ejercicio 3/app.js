const contadorBooleanos = (array) => {
    if (array.length > 0){
        let arrayTrue = array.filter(data => data == true);
        let arrayFalse = array.filter((data) => data == false);
        return `La cantidad de true's en el array es de ${arrayTrue.length}, y la de false's es de ${arrayFalse.length}`
    } else {
        return 0;
    }
};

console.log(contadorBooleanos([true, false, true, true]));