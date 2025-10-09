function calcular(){
    let cantidad = document.getElementById('cantidad').value;
    let conversion = document.getElementById('conversion').value;
    let resultado = cantidad * conversion;

    if(!isNaN(resultado)){
        document.getElementById('resultado').value = resultado;
    } else {
        document.getElementById('resultado').value = 'Verifiquee los datos';
    }
    
}