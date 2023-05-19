const carrito = recuperarCarrito() || []

function recuperarCarrito() {
      return JSON.parse(localStorage.getItem("carritoProductos"))

 }
 recuperarCarrito()

 function guardarCarrito(carrito) {
    if (carrito.lenght > 0) {
        localStorage.setItem("carritoproductos"), JSON.stringify(productos)
    }
}