function solucionHelados(dinero) {
    if (dinero >= 0.6 && dinero < 1) {
        dinero = dinero - 0.6;
        alert("Le alcanza hasta helado1");
        if(dinero > 0) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else if (dinero >= 1 && dinero < 1.6) {
        dinero = dinero - 1;
        alert("Le alcanza hasta helado2");
        if(dinero > 1) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else if (dinero >= 1.6 && dinero < 1.7) {
        dinero = dinero - 1.6;
        alert("Le alcanza hasta helado3");
        if(dinero > 1.6) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else if (dinero >= 1.7 && dinero < 1.8) {
        dinero = dinero - 1.7;
        alert("Le alcanza hasta helado4");
        if(dinero > 1.7) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else if (dinero >= 1.8 && dinero < 2.9) {
        dinero = dinero - 1.8;
        alert("Le alcanza hasta helado5");
        if(dinero > 1.8) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else if (dinero >= 2.9) {
        dinero = dinero - 2.9;
        alert("Le alcanza para cualquier helado 6 y helado 7");
        if(dinero > 2.9) {
            alert("Tu vuelto seria de " + dinero);
        } else {
            alert("No hay vuelto");
        }
    } else {
        alert("eres POBRE");
    }
    return null;
}

var dinero = prompt("Ingrese la cantidad de dinero que tiene");
solucionHelados(dinero);