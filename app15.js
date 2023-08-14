function asignarBeca() {
  const edad = parseInt(prompt('Ingrese la edad del estudiante:'));
  const promedio = parseFloat(prompt('Ingrese el promedio del estudiante:'));

  let beca = 0;

  if (edad > 18) {
    if (promedio >= 9) {
      beca = 200000;
    } else if (promedio >= 7.5) {
      beca = 100000;
    } else if (promedio >= 6.0) {
      beca = 50000;
    } else {
      beca = 'Invitación a estudiar más';
    }
  } else {
    if (promedio >= 9) {
      beca = 300000;
    } else if (promedio >= 8) {
      beca = 200000;
    } else if (promedio >= 6) {
      beca = 100000;
    } else {
      beca = 'Invitación a estudiar más';
    }
  }

  return beca;
}

const becaAsignada = asignarBeca();
alert(`Beca asignada: ${becaAsignada}`);