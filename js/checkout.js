const tbody = document.querySelector("tbody")
const finalizarCompra = document.querySelector("div.finalizarCompra")

function cargarCarrito() {
    if (carrito.length > 0) {
        carrito.forEach((producto)=> {
            tbody.innerHTML += retornoTablaCheckOut(producto)
        })
    }
}
cargarCarrito()

function activarClickEnBotonesEliminar() {
    const botones = document.querySelectorAll("button")
    if (botones !== null) {
        for (boton of botones) {
            boton.addEventListener("click", (e)=> {
                let indice = carrito.findIndex(producto => producto.codigo === parseInt(e.target.id))
                carrito.splice(indice, 1)
                guardarCarrito()
                cargarCarrito()
            })
        }
    }
}

function totalDeLaCompra() {
    return carrito.reduce((acc, productos)=> acc + productos.precio, 0)
}

finalizarCompra.addEventListener("click", ()=> {
        Swal.fire(
            'Gracias por su compra',
            'success'
         )

})