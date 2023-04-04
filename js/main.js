const mensajeInicial = "Selecciona el producto que deseas por su codigo."
const contenedor = document.querySelector("div#contenedor")
const carrito = []
const inputSearch = document.querySelector("input#form-control boton-buscador")

const productos = [{ id: 1, nombre: "Lemon Pie", imagen: "img/lemon-pie.jpeg", precio: 1800 },
                   { id: 2, nombre: "Pan de Nuéz", imagen: "img/pan-de-nuez.jpeg", precio: 1000 },
                   { id: 3, nombre: "Pasta Frola", imagen: "img/pasta-frola.jpeg", precio: 890 },
                   { id: 4, nombre: "Risotto", imagen: "img/risotto.jpeg", precio: 1200 },
                   { id: 5, nombre: "Tarta de Cebolla", imagen: "img/tarta-de-cebolla.jpeg", precio: 1400 },
                   { id: 6, nombre: "Si a Todo", imagen: "img/si-a-todo.jpg", precio: 1100 },
                   { id: 7, nombre: "Tamos Ready", imagen: "img/tamos-ready.jpg", precio: 850 },
                   { id: 8, nombre: "Yendo", imagen: "img/yendo.jpg", precio: 780 }]

// function cargarProductos() {
//     if (productos.length > 0) {
//         productos.forEach((producto)=> {
//             contenedor.innerHTML += retornoTarjetaHTML (producto)
//         })
//     } else {
//         console.warn ("Tenemos un problema, intenta de nuevo mas tarde.")
//     }

// }
// cargarProductos()

const cargarProductos = (producto)=> {
    producto.forEach(producto => {
        contenedor.innerHTML += retornoTarjetaHTML(producto)
        
    });
    activarClickEnBotones()
}

const activarClickEnBotones = ()=> {
    const btnComprar = document.querySelectorAll("boton btn btn-danger")
        for (boton of btnComprar) {
            boton.addEventListener("click", (e)=> {
                // console.log(e.target.id)
                let resultado = productos.find(producto => producto.id === parseInt(e.target.id))
                carrito.push(resultado)
            })

        }   

}
cargarProductos(productos)
recuperarCarrito()

function buscarProducto(mensajeInicial) {
    let resultado = productos.find((producto) => producto.id === parseInt(mensajeInicial))
    return resultado
}
buscarProducto()

function verCarrito() {
    console.table(carrito)
}


// no me muestra el importe de lo que compra 

function finalizarCompra() {
    if (carrito.length > 0) {
        const shopping = new comprar(carrito)
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
finalizarCompra()


function comprar() {
    let id = prompt(mensajeInicial)
    if (!parseInt(id)) {
        alert("⛔El código que ingresaste no es correcto.")
        let respuesta = confirm("¿Deseas intentar nuevamente?")
        if (respuesta) {
            comprar()
        }
        return
    }
    let productoElegido = buscarProducto(id)
    if (productoElegido !== undefined) {
        alert(`El producto ${productoElegido.nombre} fue agregado al carrito.`)
        carrito.push(productoElegido)
        let respuesta = confirm("¿Deseas comprar otro producto?")
        if (respuesta) {
            comprar()
        } else {
            finalizarCompra()
        }

    }

}
comprar()