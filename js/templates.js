
const retornoTarjetaHTML = (producto) => {
    return `<div class="card mb-3" style="max-width: 500px;">
             <div class="row g-0">
               <div class="col-md-3">
                 <img src="${producto.imagen}" class="img-fluid img-thumbnail rounded-3- start" alt="imagen del producto"/>
               </div>
               <div class="col-md-5">
                 <div class="card-body">
                   <h5 class="card-title">${producto.nombre}</h5>
                   <p class="card-text fw-semibold">$ ${producto.precio}</p>
                   <button type="button" id="${producto.id}" class="boton-agregar btn btn-danger">Comprar</button>
                 </div>
               </div>
             </div>
           </div>`
}


const retornoTablaCheckOut = (producto) => {
    return  `<tr>
                <td>${producto.nombre}</td>
                <td>$ ${producto.precio}</td>
                <td><button type="button" id="${producto.codigo} class="btn btn-danger boton-eliminar">X</button></td>
            </tr>`
}

function guardarCarrito() {
      localStorage.setItem("carritoProductos", JSON.stringify(productos))
}