function calcularPrecioVenta(cantidadHuevos) {
  const precioUnitario = 250;
  let descuento = 0;

 
  if (cantidadHuevos <= 100) {
      descuento = 0.03;
  } else if (cantidadHuevos <= 200) {
      descuento = 0.05;
  } else if (cantidadHuevos <= 300) {
      descuento = 0.07;
  } else {
      descuento = 0.1;
  }

  const precioTotal = cantidadHuevos * precioUnitario * (1 - descuento);
  return precioTotal;
}

const cantidad = parseInt(prompt("Ingrese la cantidad de huevos a llevar:"));
const precioTotal = calcularPrecioVenta(cantidad);
alert(`El precio total de ${cantidad} huevos es: $${precioTotal.toFixed(0)}`);