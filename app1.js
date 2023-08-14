//funcion que reciba parametros y devuelva la suma
const suma = function op (num1,num2){
  return Number(num1) + Number(num2);
 }
 //igualar la funcion anterior a una nueva variable para hacer la comparación
 let resultado=(suma(prompt("Digita el primer numero"),prompt("digita el segundo numero")));
 //condicional que evalue  la suma  para determinar el resultado final 
 if(resultado > 0) {
 alert(`el numero ${resultado} es positivo`);
 }else if (resultado < 0 ){
     alert(`el numero ${resultado} es negativo`);
 }else{
     alert(`el numero es 0`);
 }