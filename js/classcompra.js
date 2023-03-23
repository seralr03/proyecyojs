class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() { //le muestro al usuario lo que va comprando.. 
        if (this.carrito.length >0) {
            return this.carrito.reduce((_acc, _producto)=> _acc + productos.precio, 0)
        } else {
            return "El carrito no tiene productos aún."
        }

    }
    confirmarCompra() {
        if (this.obtenerSubtotal() !== "Tenemos un error"){
            return `✅Se confirma el pago de $ ${this.obtenerSubtotal()} \n Muchas gracias por su compra!.`
        } else {
            return "⛔Se ha producido un error, por favot intenta nuevamente mas tarde."
        }
        //cerrar el workflow
    }
}