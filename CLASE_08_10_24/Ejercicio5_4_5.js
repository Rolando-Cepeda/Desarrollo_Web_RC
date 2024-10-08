/* 
4. Almacena en dos variables datos de validación (usuario y contraseña) correctos y permite que el usuario valide (dispone de 3 intentos).
*/
var frase = "BIENVENIDO A MI PROGRAMA";
alert(frase);

//Entradas:

let user = "";
let pass = "";
let user2 = "Rolando";
let pass2 = "1234";
let attempt = 0;


// Salidas:
do {
    user = prompt("Escribe el nombre de Usuario:");
    pass = prompt("Escribe la clave de Usuario:");
    if (user === user2 && pass === pass2) {
        alert("Usuario identificado");
        break;
    }else {
        alert("Vuelve a intentarlo.");
        attempt++;
        alert("Has usado " + attempt + " de 3 intentos");
    }

} while (attempt < 3) 

 

 
