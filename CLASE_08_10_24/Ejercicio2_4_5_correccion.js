/* 
Solicita al usuario una frase y una letra y muestra la cantidad de veces que aparece la letra en la frase.
*/

let frase = prompt("Introduce una frase");
let letra = prompt("Introduce una letra");
let contador = 0;


for (let i = 0; i < frase.length; i++) {// Recorre el ARRAY
    if (frase[i] == letra) { // Compara con la letra introducida por el usuario
        contador++;
    }
}
alert("La cantidad de veces que aparece la letra " + letra + " en la frase es: " + contador + " veces"); // Muestra la respuesta a traves de un cuadro de texto