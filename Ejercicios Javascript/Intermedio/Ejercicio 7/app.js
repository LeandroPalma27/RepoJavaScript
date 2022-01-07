/* Desarolle el algoritmo de ordenamiento bubble sort */

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) { // Recorre cada elemento de arreglo.
        for (let j = 0; j < arr.length - 1 - i; j++) { // Seria 4 - 1 - 0 = 3, en la primera vuelta.
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return console.log(arr);
};

bubbleSort([5, 7, 1, 10]);
