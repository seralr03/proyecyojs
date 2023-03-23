/* ✅clase js - controlara el carrito con productos y manejara la confirmacion de la compra.
   ✅ Mensaje inicial - reciclamos el que tenemos, lo hacemos mas simple.
   Creamos una funcion para buscar los productos que nos retorne el resultado - funiones de orden superior.
   Creamos una funcion para ver el contenido del carrito (solo a modo informativo para ver como queda)
   Creamos una funcion para finalizar la compra.
    -debe validar que el carrito tenga productos. Si todo va bien.
        -instanciamos la claseCompra{} pasandole el carrito como parametro.
        -un metodo obtenersubtotal() - orden superoir reduce
        -otro metodo confirmacionCompra(): confirmamos el pago y agradecemos.
        -despues de cerrado el circuito de compra, vaciamos el carrito para que el usuario pueda iniciar la compra nuevamente.(parte del WordFlow)
    Agrupamos todo lo anterior, en una sola funcion comprar().*/

    

// const productos = [{ id: 1, nombre: "Lemon Pie", imagen: "/img/lemon-pie.jpg", precio1: 1800},
//                    { id: 2, nombre: "Pan de Nuéz", imagen: "/img/pan-de-nuez.jpg", precio1: 1000},]

class Compra {
    constructor(carrito) {
        this.carrito = carrito
    }
    obtenerSubtotal() { //le muestro al usuario lo que va comprando
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