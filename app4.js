function valorProducto(){
  let valor = prompt('ingrese el valor del producto');
  let porcentaje = prompt('ingrese el procentaje de 1 a 100')

  if(isNaN(porcentaje) || porcentaje < 0 || porcentaje > 100){
    alert('ingrese un valor entre 0 y 100');
    valorProducto();
  }
  let total = (valor * porcentaje) / 100;


  alert(`el valor del producto es: ${total}`);
}

valorProducto()