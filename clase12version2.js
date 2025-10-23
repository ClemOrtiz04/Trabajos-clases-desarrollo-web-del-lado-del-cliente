async function mostrar() {
    const resp = await fetch('https://restcountries.com/v3.1/all?fields=name,flags');
    const data = await resp.json();


let html = '';

    html += '<table class="table">';
        html += '<tr>';
            html += '<th></th>';
            html += '<th>País</th>';
            html += '<th>Nombre oficial</th>';
        html += '<tr>';

        for (const item of data) {
            html += '<tr>';
                html += '<td><img src="' + item.flags.png + '"/></td>';
                html += '<td>' + item.name.common + '</td>';
                html += '<td>' + item.name.official + '</td>';
            html += '<tr>';
        }
    html += '</table>';

    document.getElementById("paises").innerHTML = html;

}

