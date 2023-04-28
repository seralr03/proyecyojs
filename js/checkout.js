const tbody = document.querySelector("tbody")

function cargarCarrito() {
    if (carrito.length > 0) {
        carrito.forEach((producto)=> {
            tbody.innerHTML += retornoTablaCheckOut(producto)
        })
    }
}
cargarCarrito()