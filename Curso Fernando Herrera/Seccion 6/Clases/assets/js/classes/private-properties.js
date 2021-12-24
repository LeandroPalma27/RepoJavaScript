class Rectangulo {

    #area = 0;
    #base;
    #altura;

    constructor(base = null, altura = null) {
        this.#base = base;
        this.#altura = altura;
        this.#area = base * altura;
    }

    // Setters:
    set setBase(base) {
        if (base > 0) {
            this.#area = base * this.#altura;
        } else {
            throw Error('Ingrese un dato valido.');
        } 
        this.#base = base; 
    }
    set setAltura(altura) {
        if (altura > 0) {
            this.#area = this.#base * altura;
        } else {
            throw Error('Ingrese un dato valido.');
        }
        this.#altura = altura; 
    }

    // Getters: 
    get getBase() { return this.#base; }
    get getAltura() { return this.#altura; }

    // Methods:
    #recalcularArea(base, altura) {
        this.#base = base;
        this.#altura = altura;
        this.#area = base * altura;
        return this.#area;
    }

    recalculo(base, altura) { 
        this.#recalcularArea(base, altura);
    }

}

const rectangulo = new Rectangulo(10, 5);
const rectangulo_2 = new Rectangulo(20, 5);

/* rectangulo.setBase = 100;
rectangulo_2.setAltura = 10; */

rectangulo.recalculo(20, 10);

console.log({ rectangulo });
console.log({ rectangulo_2 })
