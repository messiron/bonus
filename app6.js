function porcentajeHombresMujeres(){
  let hombres = prompt('ingrese la cantidad de hombres')
  let mujeres = prompt('ingrese la cantidad de mujeres')
  let total = parseInt(hombres) + parseInt(mujeres)
  let porcentajeHombres = parseInt(hombres) / parseInt(total) * 100
  alert('el porcentaje de hombres es:'+ porcentajeHombres)
  let porcentajeMujeres = parseInt(mujeres) / parseInt(total) * 100
  alert('el porcentaje de mujeres es:'+porcentajeMujeres )
}

porcentajeHombresMujeres()