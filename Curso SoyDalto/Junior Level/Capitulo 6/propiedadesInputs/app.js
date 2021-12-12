let input1 = document.getElementById('txtCheck')
let input9 = document.getElementById('txtNumber')
let input2 = document.getElementById('txtDate')
let input3 = document.getElementById('txtEmail')
let input4 = document.getElementById('txtPass')
let input5 = document.getElementById('txtText')
let input6 = document.getElementById('txtRadio')
let input7 = document.getElementById('txtEnviar')
let input8 = document.getElementById('txtFile')

input1.type = 'submit'
input1.placeholder = 'Ingrese nombre';

input1.name = 'xd'

input8.accept = 'image/png'

input5.minLength = 4;
input5.maxLength = 6;

input9.min = 1;
input9.max = 10;
input9.disabled = true;

let contenedor = document.getElementById('miDiv')
contenedor.className = 'container'



