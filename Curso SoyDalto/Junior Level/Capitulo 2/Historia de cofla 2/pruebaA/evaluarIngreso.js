const evaluarIngreso = (x) => {
    let hora = new Date();
    let horaExacta = (hora.getHours() + ':' + hora.getUTCMinutes());
    if (horaExacta == '2:00') {
        alert('Usted puede ingresar y su entrada es libre.');
    } else {
        alert('Usted puede ingresar, acerquese a comprar una entrada.');
    }
}