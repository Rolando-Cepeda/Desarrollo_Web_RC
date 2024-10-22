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
    } else {
        alert("Vuelve a intentarlo.");
        attempt++;
        alert("Has usado " + attempt + " de 3 intentos");
    }

} while (attempt < 3)

/* //CORRECCIÓN CON LA PROFE.
const USER_C = "Hola";
const PASS_C = "caracola";
let contador = 0;
let user, pass;

do {
    user = prompt("Inserta el Usuario");
    pass = prompt("Inserta la contraseña");
    if (user != USER_C || pass != PASS_C) {
        contador++;
        alert("Usuario y/o contraseña incorrecta, te quedan " + (3 - contador) + "intentos");
    }


} while ((user != USER_C || pass != PASS_C) && contador < 3);
if (contador < 3) {
    alert("Acertaste")
}
 */




