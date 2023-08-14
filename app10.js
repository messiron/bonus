function calculadora(){
  let operation = prompt('ingrese la operacion que desea realizar 1:para suma || 2:para resta || 3: para multiplication || 4: para Division ')

  if(operation == 1){
    let num1 = parseInt(prompt('ingrese el primer numero'))
    let num2 = parseInt(prompt('ingrese el segundo numero'))
    alert(`tu resultado es ${num1 + num2}`)
  }else if(operation ==2){
    let num1 = parseInt(prompt('ingrese el primer numero'))
    let num2 = parseInt(prompt('ingrese el segundo numero'))
    alert(`tu resultado es ${num1 - num2}`)
  }else if(operation == 3){
    let num1 = parseInt(prompt('ingrese el primer numero'))
    let num2 = parseInt(prompt('ingrese el segundo numero'))
    alert(`tu resultado es ${num1 * num2}`)
  }else if(operation == 4){
    let num1 = parseInt(prompt('ingrese el primer numero'))
    let num2 = parseInt(prompt('ingrese el segundo numero'))
    alert(`tu resultado es ${num1 / num2}`)
  }else{
    alert('ingrese una opcion valida')
  }
}

calculadora();