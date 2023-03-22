function creoID () {
    return parseInt(Math.random() * 10000)
}

function agregarProducto () {
    const nuevoProucto = { id: 0, nombre: "", importe: 0}
    nuevoProucto.id = creoID()
    nuevoProucto.nombre = prompt ("Ingrese el nombre del procuto").toUpperCase()
    nuevoProucto.importe = parsefloat(prompt("Ingrese el importe del producto"))
    productos.push(nuevoProucto)
}