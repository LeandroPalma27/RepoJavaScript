let titulos = document.querySelectorAll('.title');
let titutlosHTMLCollection = document.getElementsByClassName('title')

console.dir(titulos);
console.dir(titutlosHTMLCollection);

for (let i = 0; i < titulos.length; i++) {
    console.log(titulos.item(i))
    // console.log(titutlosHTMLCollection.item(i));
}
let contador = 0;
while (titutlosHTMLCollection.length > contador) {
    console.log(titutlosHTMLCollection.item(contador))
    contador++;
}

/* Para que sirve item?
item() es un metodo perteneciente a los objetos NodeList y HTMLCollection. Lo que permite hacer ese metodo
es poder acceder a algun elemento de la lista, ya que como parametro indicaremos el numero posicion existen
te en la lista de objetos HTML o Node. */ 