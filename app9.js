let compra = prompt("¿Qué medio de transporte compraste? carro, moto o bici");

if (compra === "moto" || compra === "carro") {
    let precio = parseFloat(prompt("Ingrese el precio del vehículo:"));
    let descuento = precio * 0.15;
    let precioConDescuento = precio - descuento;
    alert("Precio con descuento: " + precioConDescuento);
} else if (compra === "bici" || compra === "patineta") {
    let precio = parseFloat(prompt("Ingrese el precio del medio de transporte:"));
    let descuento = precio * 0.10;
    let precioConDescuento = precio - descuento;
    alert("Precio con descuento: " + precioConDescuento);
} else if (compra === "scooter electrico") {
    let precio = parseFloat(prompt("Ingrese el precio del scooter eléctrico:"));
    let descuento = precio * 0.05;
    let precioConDescuento = precio - descuento;
    alert("Precio con descuento: " + precioConDescuento);
} else {
    alert("Datos inválidos");
}
