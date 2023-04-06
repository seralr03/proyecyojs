const contenedor = document.querySelector("#contenedor")
const inputSearch = document.querySelector("input#form-control boton-buscador")

const productos = [{ id: 1, nombre: "Lemon Pie", imagen: "img/lemon-pie.jpeg", precio: 1800 },
                   { id: 2, nombre: "Pan de Nuéz", imagen: "img/pan-de-nuez.jpeg", precio: 1000 },
                   { id: 3, nombre: "Pasta Frola", imagen: "img/pasta-frola.jpeg", precio: 890 },
                   { id: 4, nombre: "Risotto", imagen: "img/risotto.jpeg", precio: 1200 },
                   { id: 5, nombre: "Tarta de Cebolla", imagen: "img/tarta-de-cebolla.jpeg", precio: 1400 },
                   { id: 6, nombre: "Si a Todo", imagen: "img/si-a-todo.jpg", precio: 1100 },
                   { id: 7, nombre: "Tamos Ready", imagen: "img/tamos-ready.jpg", precio: 850 },
                   { id: 8, nombre: "Yendo", imagen: "img/yendo.jpg", precio: 780 }]


const cargarProductos = (producto)=> {
    producto.forEach(producto => {
        contenedor.innerHTML += retornoTarjetaHTML(producto)
        
    });
    activarClickEnBotones()
}

const activarClickEnBotones = ()=> {
    const btnComprar = document.querySelectorAll(".boton-agregar");
        for (boton of btnComprar) {
            boton.addEventListener("click", (e)=> {
                console.log(e.target.id)
                let resultado = productos.find((producto) => producto.id === parseInt(e.target.id))
                carrito.push(resultado)
                console.log(carrito)
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