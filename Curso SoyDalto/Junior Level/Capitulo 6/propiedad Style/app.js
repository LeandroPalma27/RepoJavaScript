let contenedor = document.querySelector('.container');
contenedor.style.display = 'flex'
contenedor.style.justifyContent = 'space-between'
contenedor.style.backgroundColor = '#009'

let titulos = document.querySelectorAll('.title')
console.log(titulos)

titulos.forEach((e) => {
    e.style.padding = '15px'
    e.style.color = 'white'
});