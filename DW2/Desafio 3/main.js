let nombreProducto = "Cuadernos"; 
let precioUnitario = 3000; 

let cantidadDeseada = prompt("¿Cuántos " + nombreProducto + " deseas comprar?");

let costoTotal;

if (cantidadDeseada >= 5) {
    let descuento = 0.1; // 10%
    let costoSinDescuento = precioUnitario * cantidadDeseada;
    let montoDescuento = costoSinDescuento * descuento;
    costoTotal = costoSinDescuento - montoDescuento;
} else {
    costoTotal = precioUnitario * cantidadDeseada;
}

alert("El costo total de tu compra es: " + costoTotal + " pesos");
