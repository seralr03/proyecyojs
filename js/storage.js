const carrito = []

const guardarCarrito = ()=> {
    if (carrito.length > 0) {
        localStorage.setItem("carritoProductos", JSON.stringify(carrito))
    }

}

const recuperarCarrito = ()=> {
    const carritoAlmacenado = JSON.parse(localStorage.getItem("carritoProductos"))
    if (carritoAlmacenado !== null) {
        carrito.push(...carritoAlmacenado)      
        }
    }