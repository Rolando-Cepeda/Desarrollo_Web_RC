/* 
5. Solicita al usuario una letra, si inserta una a muestra el número 7, si es una b, el 9, si es una c el 101 y si no es ninguno de los tres, indícale que se ha equivocado de letra
*/
var frase = "BIENVENIDO A MI PROGRAMA";
alert(frase);

//Entradas:
let option1 = prompt("Inserta una letra: (a, b o c) ");


switch (option1) {
    case "a":
        alert("Hola número 7"); // Salidas:
        break;

    case "b":
        alert("Hola número 9"); // Salidas:
        break;

    case "c":
        alert("Hola número 101"); // Salidas:
        break;

    default:
        alert(option1 + " No es la letra requerida") // Salidas:
        break;
}









