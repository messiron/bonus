let  num1=prompt('digita el numero 1');
let  num2=prompt('digita el numero 2');
let  num3=prompt('digita el numero 3');

if (num1 > num2 && num1 < num3){
    console.log(num1,"es mayor");
}else if(num2>num3 && num2 < num3){
    console.log(num2,"es mayor");
}else{
    console.log(num3,"es mayor");
}