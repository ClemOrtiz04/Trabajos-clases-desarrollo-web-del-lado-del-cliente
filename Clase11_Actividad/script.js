function calcular() {
    const tipoEmpleado = document.getElementById("tipo").value;
    const dias = document.getElementById("dias").value;

    let sueldoDiario, bono, total;

    if(dias > 28){
        alert("Los días trabajados no deben ser mayor a 28");
        return;
    }

    if(dias < 0) {
        alert("Los dias trabajados no deben ser negativos");
        return;
    }

    switch(parseInt(tipoEmpleado)) {
        case 1: 
            sueldoDiario = 200;
            bono = 1500;
        break;
        case 2: 
            sueldoDiario = 250;
            bono = 1300;
        break;
        case 3: 
            sueldoDiario = 400;
            bono = 500;
        break;
        case 4: 
            sueldoDiario = 430;
            bono = 0;
        break;
        
    }
    if(dias < 25) {
        bono = 0;
    }
    total = (sueldoDiario * dias) + bono;
    
    let html = "";
    html += '<table class="table">'
        html += '<tr>';
            html += '<th>Tipo de empleado</th>';
            html += '<th>Dias trabajados</th>';
            html += '<th>Sueldo diario</th>';
            html += '<th>Bono mensual</th>';
            html += '<th>Total</th>';
        html += '</tr>';
        html += '<tr>';
            html += '<td>' + tipoEmpleado + '</td>';
            html += '<td>' + dias + '</td>';
            html += '<td>' + sueldoDiario + '</td>';
            html += '<td>' + bono + '</td>';
            html += '<td>' + total + '</td>';
        html += '</tr>';
    html += '</table>'

    document.getElementById("resultado").innerHTML = html;
}