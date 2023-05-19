const contenedor = document.querySelector("#contenedor")
const inputSearch = document.querySelector("input#inputSearch")
const productos = []
const urlProductos = `js/productos.json`


const obtenerProductos = () => {
    fetch(urlProductos)
        .then((response)=> response.json() )
        .then((data)=> productos.push(...data) )
        .then(()=> cargarProductos(productos) )
        .catch(error => {
            console.error(error)            
        })
}

                   
const cargarProductos = (producto)=> {
    producto.forEach(producto => {
        contenedor.innerHTML += retornoTarjetaHTML(producto)
        
    });
    activarClickEnBotones()
}
obtenerProductos()



function activarClickEnBotones() {
    const bontones = document.querySelectorAll("button");
        for (boton of bontones) {
            boton.addEventListener("click", (e)=> {
                agregarAlCarrito(e.target.id)
                guardarCarrito(carrito)
            })

        }

}

function agregarAlCarrito(id) {
    let resultado = productos.find(producto => producto.id === parseInt(id))
    if (resultado !== undefined) {
        carrito.push(resultado)
        alerta()
        guardarCarrito(carrito)
    }
}
s

function alerta () {
    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: false,
        background: "#4e4e4d",
        iconColor: "red",
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        color: "red",
        title: 'SE AGREGO AL CARRITO'
      })
}