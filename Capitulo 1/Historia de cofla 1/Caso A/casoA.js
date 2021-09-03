var chico1, chico2, chico3;
var helado1, helado2, helado3, helado4, helado5, helado6, helado7;

chico1 = prompt("Cuanto dinero tiene chico1: ");
chico2 = prompt("Cuanto dinero tiene chico2: ");
chico3 = prompt("Cuanto dinero tiene chico3: ");

//console.log(chico1,chico2,chico3);

helado1 = 0.6, helado2 = 1, helado3 = 1.6, helado4 = 1.7, helado5 = 1.8, helado6 = 2.9, helado7 = 2.9;

if (chico1 >= helado7 && chico2 >= helado7 && chico3 >= helado7) {
    alert("¡A todos les alcanza para cualquier helado!");
} else {

    if (chico1 >= 0.6 && chico1 < 1) {
        alert("A chico1 le alcanza hasta helado1");
    } else if (chico1 >= 1 && chico1 < 1.6) {
        alert("A chico1 le alcanza hasta helado2");
    } else if (chico1 >= 1.6 && chico1 < 1.7) {
        alert("A chico1 le alcanza hasta helado3");
    } else if (chico1 >= 1.7 && chico1 < 1.8) {
        alert("A chico1 le alcanza hasta helado4");
    } else if (chico1 >= 1.8 && chico1 < 2.9) {
        alert("A chico1 le alcanza hasta helado5");
    } else if (chico1 >= 2.9) {
        alert("A chico1 le alcanza para cualquier helado");
    } else {
        alert("chico1 es POBRE");
    }

    if (chico2 >= 0.6 && chico2 < 1) {
        alert("A chico2 le alcanza hasta helado1");
    } else if (chico2 >= 1 && chico2 < 1.6) {
        alert("A chico2 le alcanza hasta helado2");
    } else if (chico2 >= 1.6 && chico2 <= 1.7) {
        alert("A chico2 le alcanza hasta helado4");
    } else if (chico2 >= 1.7 && chico2 < 1.8) {
        alert("A chico2 le alcanza hasta helado4");
    } else if (chico2 >= 1.8 && chico2 < 2.9) {
        alert("A chico2 le alcanza hasta helado5");
    } else if (chico2 >= 2.9) {
        alert("A chico2 le alcanza para cualquier helado");
    } else {
        alert("chico2 es POBRE");
    }

    if (chico3 >= 0.6 && chico3 < 1) {
        alert("A chico3 le alcanza hasta helado1");
    } else if (chico3 >= 1 && chico3 < 1.6) {
        alert("A chico3 le alcanza hasta helado2");
    } else if (chico3 >= 1.6 && chico3 <= 1.7) {
        alert("A chico3 le alcanza hasta helado4");
    } else if (chico3 >= 1.7 && chico3 < 1.8) {
        alert("A chico3 le alcanza hasta helado4");
    } else if (chico3 >= 1.8 && chico3 < 2.9) {
        alert("A chico3 le alcanza hasta helado5");
    } else if (chico3 >= 2.9) {
        alert("A chico3 le alcanza para cualquier helado");
    } else {
        alert("chico3 es POBRE");
    }
}

//Conclusiones: Quedo mejor usar los intervalos entre valores dados para los helados para poder hacer las comparaciones.
//Ojo: Este codigo no es bueno, porque no es mantenible ni mejorable. Imagina que se actualice la tabla con mas helados y nuevos precios, lo que hay que cambiar.
