document.addEventListener('DOMContentLoaded', () => {
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', '/DOM/Ejercicios DOM/Ejercicio 1/assets/json/data.json', true);
    xhttp.send();
    xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            let data = JSON.parse(xhttp.responseText);
            let tabla = document.createElement('table');
            let header = document.createElement('thead');
            let body = document.createElement('tbody');
            let contenedorTabla = document.getElementById('containerTable');
            tabla.setAttribute('class', 'table table-dark tabla-data')
            tabla.appendChild(header);
            tabla.appendChild(body);
            header.innerHTML = 
            `<tr><th>Id</th>
             <th>Nombre</th>
             <th>Apellido P.</th>
             <th>Apellido M.</th>
             <th>DNI</th></tr>`;
            for (object of data) {
                let fila = document.createElement('tr');
                fila.setAttribute('class', 'filas')
                fila.innerHTML = 
                `<td>${object.id}</td>
                 <td>${object.nombre}</td>
                 <td>${object.apellidos.paterno}</td>
                 <td>${object.apellidos.materno}</td>
                 <td>${object.dni}</td>`;
                body.appendChild(fila);
            }
            contenedorTabla.appendChild(tabla);
        }
    };
});

