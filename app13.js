function diaSegunNumero(){
  let dia = prompt('ingrese un numero del 1 al 7 para ver a que dia le corresponde')
  if (dia ==1){
    alert('el dia es lunes')
  }else if(dia ==2){
    alert('el dia es martes')
  }else if(dia ==3){
    alert('el dia es miercoles')
  }else if(dia ==4){
    alert('el dia es jueves')
  }else if(dia ==5){
    alert('el dia es viernes')
  }else if(dia ==6){
    alert('el dia es sabado')
  }else if(dia ==7){
    alert('el dia es domingo')
  }else{
    alert('ingrese un numero del 1 al 7')
  
}
}

diaSegunNumero();