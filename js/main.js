const carrito = []

const productos = [{codigo: 1, nombre: "Lemon Pie", imagen: "/img/lemon-pie.jpg", precio: 1800},
                   {codigo: 2, nombre: "Pan de Nuéz", imagen: "/img/pan-de-nuez.jpg", precio: 1000},
                   {codigo: 3, nombre: "Pasta Frola", imagen: "/img/pasta-frola.jpg", precio: 890},
                   {codigo: 4, nombre: "Risotto", imagen:"/img/risotto.jpg", precio: 1200},
                   {codigo: 5, nombre: "Tarta de Cebolla", imagen:"/img/tarta-de-cebolla.jpg", precio: 1400},
                   {codigo: 6, nombre: "Si a Todo", imagen:"/img/si-a-todo.jpg", precio: 1100},
                   {codigo: 7, nombre: "Tamos Ready", imagen: "/img/tamos-ready.jpg", precio: 850},
                   {codigo: 8, nombre: "Yendo", imagen: "/img/yendo.jpg", precio: 780}]


const mensajeInicial = "Selecciona el producto que quieres por su código."


function buscarProducto(codigo) {
    let resultado = productos.find((producto) => producto.codigo === parseInt(codigo))
    return resultado
}