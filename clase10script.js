function generarTabla(){
    const cantidad = document.getElementById('cantidad').value;
    const limite = document.getElementById('limite').value;
    
    let html = '';

    html = `<table class="table">`;

        for(let i = 1; i <= limite; i++){
            html += `<tr>`;
            html += `<td>${cantidad}</td>`;
            html += `<td>X</td>`;
            html += `<td>${i}</td>`;
            html += `<td>=</td>`;
            html += `<td>${cantidad * i}</td>`;
            html += `</tr>`;
        }

    html += '</table>'

    document.getElementById('resultado').innerHTML = html;
}