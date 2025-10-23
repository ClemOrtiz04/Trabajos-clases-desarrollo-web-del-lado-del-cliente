function mostrar() {
    const data = [
        {
            alias: 'México',
            nombre: 'Estados Unidos Mexicanos',
            bandera: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/960px-Flag_of_Mexico.svg.png'
        },
        {
            alias: 'USA',
            nombre: 'Estados Unidos de Ámerica',
            bandera: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/960px-Flag_of_the_United_States.svg.png'
        }
    ]



let html = '';

    html += '<table class="table">';
        html += '<tr>';
            html += '<th></th>';
            html += '<th>País</th>';
            html += '<th>Nombre oficial</th>';
        html += '<tr>';

        for (const item of data) {
            html += '<tr>';
                html += '<td><img src="' + item.bandera + '"/></td>';
                html += '<td>' + item.alias + '</td>';
                html += '<td>' + item.nombre + '</td>';
            html += '<tr>';
        }
    html += '</table>';

    document.getElementById("paises").innerHTML = html;

}

