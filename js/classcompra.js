class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() { //le muestro al usuario lo que va comprando.. 
        if (this.carrito.length > 0) {
            return this.carrito.reduce((acc, _producto)=> acc + productos.precio, 0)
        } else {
            return "El carrito no tiene productos aún."
        }

    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== "Tenemos un error"){
            return `✅El monto a pagar es de $ ${this.obtenerSubtotal()} \n Muchas gracias por tu compra!.`
        } else {
            return "⛔Se ha producido un error, por favor intenta nuevamente mas tarde."
        }
        //cerrar el workflow
    }
}