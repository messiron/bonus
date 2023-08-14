
function calcularPeso() {
  let peso = prompt('ingrese su masa corporal')
  if (peso < 18.5) {
    alert ("Por debajo del peso");
  } else if (peso < 24.9) {
    alert ("Peso saludable");
  } else if (peso < 29.9) {
    alert ("Sobrepeso");
  } else {
    alert ("Obesidad");
  }
}


calcularPeso()
