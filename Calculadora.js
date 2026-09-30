const promp = require("prompt-sync")();

let numero1 = 0;
let operacion = "";
let numero2 = 0;
let resultado = 0;

numero1 = parseInt(promp("Ingrese el primer numero: "));
console.log("El primer numero es: " + numero1);

numero2 = parseInt(promp("Ingrese el segundo numero : "));
console.log("El segundo numero es: " + numero2);

operacion = promp("Ingrese la operacion a realizar (+, -, *, /): ");
