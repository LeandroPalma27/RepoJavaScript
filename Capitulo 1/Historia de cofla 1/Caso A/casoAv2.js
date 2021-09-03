function solucionHelados(dinero) {
    if (dinero >= 0.6 && dinero < 1) {
        alert("Le alcanza hasta helado1");
    } else if (dinero >= 1 && dinero < 1.6) {
        alert("Le alcanza hasta helado2");
    } else if (dinero >= 1.6 && dinero < 1.7) {
        alert("Le alcanza hasta helado3");
    } else if (dinero >= 1.7 && dinero < 1.8) {
        alert("Le alcanza hasta helado4");
    } else if (dinero >= 1.8 && dinero < 2.9) {
        alert("Le alcanza hasta helado5");
    } else if (dinero >= 2.9) {
        alert("Le alcanza para cualquier helado");
    } else {
        alert("eres POBRE");
    }
    return null;
}

var dinero = prompt("Ingrese la cantidad de dinero que tiene");
solucionHelados(dinero);