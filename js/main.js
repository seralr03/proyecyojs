const mensajeInicial = "Selecciona el producto que deseas por su código."
const carrito = []

const productos = [{ codigo: 1, nombre: "Lemon Pie", imagen: "/img/lemon-pie.jpg", precio: 1800 },
                   { codigo: 2, nombre: "Pan de Nuéz", imagen: "/img/pan-de-nuez.jpg", precio: 1000 },
                   { codigo: 3, nombre: "Pasta Frola", imagen: "/img/pasta-frola.jpg", precio: 890 },
                   { codigo: 4, nombre: "Risotto", imagen: "/img/risotto.jpg", precio: 1200 },
                   { codigo: 5, nombre: "Tarta de Cebolla", imagen: "/img/tarta-de-cebolla.jpg", precio: 1400 },
                   { codigo: 6, nombre: "Si a Todo", imagen: "/img/si-a-todo.jpg", precio: 1100 },
                   { codigo: 7, nombre: "Tamos Ready", imagen: "/img/tamos-ready.jpg", precio: 850 },
                   { codigo: 8, nombre: "Yendo", imagen: "/img/yendo.jpg", precio: 780 }]



function buscarProducto(mensajeInicial) {
    let resultado = productos.find((producto) => producto.codigo === parseInt(mensajeInicial))
    return resultado
}

function verCarrito() {
    console.table(carrito)
}

function finalizarCompra() {
    if (carrito.length > 0) {
        const shopping = new Compra(carrito)
        alert(`El costo de su compra es de $ ${shopping.obtenerSubtotal()}`)
        let respuesta = confirm("¿Desea realizar el pago?")
        if (respuesta) {
            alert(shopping.confirmarCompra())
            carrito.length = 0
        }
    } else {
        console.warn("No hay productos en el carrito.")

    }
}


function comprar() {
    let codigo = prompt(mensajeInicial)
    if (!parseInt(codigo)) {
        alert("⛔El código que ingresaste no es correcto.")
        let respuesta = confirm("¿Deseas intentar nuevamente?")
        if (respuesta) {
            comprar()
        }
        return
    }
    let productoElegido = buscarProducto(codigo)
    if (productoElegido !== undefined) {
        alert(`${productoElegido.imagen} El producto ${productoElegido.nombre} fue agregado al carrito.`)
        carrito.push(productoElegido)
        let respuesta = confirm("¿Deseas comprar otro producto?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }

    }

}