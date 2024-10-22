/* 
Suma o resta (según elija el usuario) dos números reales
*/
var frase = "BIENVENIDO A MI PROGRAMA";
alert(frase);


let n1 = parseInt(prompt("Introduce el primer número"));
let n2 = parseInt(prompt("Introduce el segundo número:"));
let operation = prompt("Elige la operación que deseas realizar: (SUMAR, RESTAR)");
let result = 0;

switch (operation) {
    case "SUMAR":
        result = n1 + n2;
        alert("El resultado de la suma es: " + result)
        break;
    case "RESTAR":
        result = n1 - n2;
        alert("El resultado de la resta es: " + result)
        break;
    /* case "/":
    result = n1 / n2;
    alert("El resultado de la división es: " + result)
    break;
    case "*":
    result = n1 * n2;
    alert("El resultado de la multiplicación es: " + result)
    break;
    case "+":
    result = n1 % n2;
    alert("El resultado de el resto es: " + result)
    break; */

    default:
        break;
}