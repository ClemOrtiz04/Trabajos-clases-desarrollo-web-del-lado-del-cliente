function calcular(){
    const precio = document.getElementById('precio').value;
    const cantidad = document.getElementById('cantidad').value;

    const subtotal = precio * cantidad;
    
    const iva = subtotal * .16;
    const total = subtotal + iva;

    document.getElementById('subtotal').value = subtotal;
    document.getElementById('iva').value = iva;
    document.getElementById('total').value = total;
}