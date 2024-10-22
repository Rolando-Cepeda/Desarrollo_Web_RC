/* 
6.- Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
*/

/* let school = ["Osvaldo", "Marco", "Rolando", "Davinia", "Carlos", "Pilar","Pepe"];

let order = school.sort();
console.log(order); */

let nombres = ["Osvaldo", "Marco", "Rolando", "Davinia", "Carlos", "Pilar","Pepe"];

let n = nombres.length;  // Obtenemos la longitud de la lista
let swapped;

// Ciclo externo: lo usamos para hacer varias pasadas por la lista
for (let i = 0; i < n - 1; i++) {
    swapped = false;  // Al inicio de cada pasada, asumimos que no habrá intercambios

    // Ciclo interno: comparamos nombres adyacentes y los intercambiamos si es necesario
    for (let j = 0; j < n - 1 - i; j++) {
        if (nombres[j] > nombres[j + 1]) {  // Si el nombre actual es mayor que el siguiente, los intercambiamos
            let temp = nombres[j];  // Usamos una variable temporal para hacer el intercambio
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
            swapped = true;  // Marcamos que hubo un intercambio
        }
    }

    // Si no hubo intercambios, la lista ya está ordenada y salimos del ciclo
    if (!swapped) {
        break;
    }
}

// Imprimir la lista ordenada
console.log(nombres);