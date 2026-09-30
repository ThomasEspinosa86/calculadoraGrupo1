const prompt = require("prompt-sync")();

let numero1 = 0;
let operacion = "";
let numero2 = 0;
let resultado = 0;
let activo = true;
let pregunta = 0;


while(activo = true){
    pregunta = parseInt(prompt("desea ingresar?: (1 si / 2no)"));
        if(pregunta === 2){
            return activo = false;
            console.log("Gracias por tu visita");
        }else if(pregunta === 1){
            numero1 = parseInt(prompt("Ingrese el primer numero: "));
console.log("El primer numero es: " + numero1);

numero2 = parseInt(prompt("Ingrese el segundo numero : "));
console.log("El segundo numero es: " + numero2);

operacion = prompt("Ingrese la operacion a realizar (+, -, *, /): ");
if(operacion != "+","-","*","/" ){
    console.log("simbolo invalido")
}

switch (operacion){
    case "+": 
        resultado = numero1 + numero2;
        console.log("el resultado de  la suma es:", resultado);
        break;
    case "-":
        resultado = numero1 - numero2;
        console.log("el resultado de la resta es:", resultado);
        break;
    case "*":
        resultado = numero1 * numero2;
        console.log("el resultado de la multiplicacion es:", resultado);
        break;
    case "/":
        resultado= numero1 / numero2;
        console.log("el resultado de la division es:", resultado);   
        if (numero1 <= 0 || numero2 <= 0 ){
              console.log("numero invalido")
              break;
        }

        
        
   } 
   

        }
        else{
    console.log("error")
    return activo = false;
   }

        
            
        

    

  }
