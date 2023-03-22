// let valorfijo = 50.35
// let tipoInmueble = 0
// let M2 = 0
// let alarma = false
// let factorAlarma = 1

// let mensajeCotizador = "¿Qué tipo de inmueble deseas cotizar? \n" +
//                         "1)Casa \n" +
//                         "2)Apartamento \n" +
//                         "3)Local comercial \n " +
//                         "4)Chacra o Casa-Campo \n" +
//                         "\n" +
//                         "Ingrese el numero de su interés."


// function iniciarCotizacion() {
//     tipoInmueble = parseInt(prompt(mensajeCotizador))

//     if (tipoInmueble === NaN) {
//         alert("Ingrese un dato válido.")
//     } else {
//         alarma = confirm("¿El inmueble tiene alarma?")
//         if (alarma === false) {
//             factorAlarma = 1.50
//         }

//         M2 = parseInt (prompt("Ingrese los M2 de se hogar"))
//         if (M2 !== NaN) {
//             let cotizacion = 0
//             switch(tipoInmueble) {
//                 case 1:
//                     valorfijo = 50.35
//                     cotizacion = M2 * valorfijo * factorAlarma
//                     break
//                 case 2:
//                     valorfijo = 42.50
//                     cotizacion = M2 * valorfijo * factorAlarma
//                     break
//                 case 3:
//                     valorfijo = 64.72
//                     cotizacion = M2 * valorfijo * factorAlarma
//                     break
//                 case 4:
//                     valorfijo = 70.20
//                     cotizacion = M2 * valorfijo * factorAlarma
//                     break
//                 default:
//                     console.warn("Ingrese un dato válido.")
//                     return                    
//             }
//             alert("El costo mensual del seguro es de $ " + cotizacion.toFixed(2))
//         }
//     }
// }

// let estoycotizando = true
// while (estoycotizando) {
// iniciarCotizacion()
// estoycotizando = confirm("¿Desea cotizar otro inmueble?")
// }  