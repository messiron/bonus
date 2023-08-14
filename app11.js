function signoZodiacal() {
  let numeroMes = prompt('Ingrese el número del mes del 1 al 12');
  if (numeroMes == 1) {
    alert('Aries');
  } else if (numeroMes == 2) {
    alert('Tauro');
  } else if (numeroMes == 3) {
    alert('Géminis');
  } else if (numeroMes == 4) {
    alert('Cáncer');
  } else if (numeroMes == 5) {
    alert('Leo');
  } else if (numeroMes == 6) {
    alert('Virgo');
  } else if (numeroMes == 7) {
    alert('Libra');
  } else if (numeroMes == 8) {
    alert('Escorpio');
  } else if (numeroMes == 9) {
    alert('Sagitario');
  } else if (numeroMes == 10) {
    alert('Capricornio');
  } else if (numeroMes == 11) {
    alert('Acuario');
  } else if (numeroMes == 12) {
    alert('Piscis');
  } else {
    alert('No es un número válido');
  }
}

signoZodiacal();