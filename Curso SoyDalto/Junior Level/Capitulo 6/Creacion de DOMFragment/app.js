let lista = document.getElementById('miLista')
let miFragementoDOM = document.createDocumentFragment();

const miJson = [
    {
        id: "1",
        "name": "Leandro"
    },
    {
        id: "2",
        name: "Martin"
    },
    {
        id: "3",
        name: "Palma"
    }
];

console.log(JSON.stringify(miJson))
let json = JSON.parse(JSON.stringify(miJson))
console.log(json) 

for (let i = 0; i < json.length; i++) {
    let listOption = document.createElement('li')
    listOption.innerHTML = json[i].name;
    miFragementoDOM.appendChild(listOption)
}

lista.appendChild(miFragementoDOM)

/* 

Explicacion de este metodo:

createDocumentFragment() es un metodo muy complejo e interesante de estudiar, ya que practicamente simulamos
el hecho de crear un fragmento de DOM propio fuera de render del navegador, para asi poder manipularlo y modi
ficarlo a nuestro antojo, para posteriormente decidir si incluirlo al DOM ya renderizado. */