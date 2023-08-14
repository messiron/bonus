function diasMes(){
  let mes = prompt('ingrese un numero del 1 al 12, para ver si el mes tiene 30 0 31 dias')
 if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
  alert('el mes tiene 30 dias')
 } else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
  alert('el mes tiene 31 dias')
 } else {
  alert('el mes tiene 28 dias')
 }
}

diasMes()
