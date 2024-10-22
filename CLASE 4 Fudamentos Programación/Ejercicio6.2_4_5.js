/* 
6.- Ordena alfabéticamente un array con 7 palabras puedes usar el algoritmo de la burbuja
*/

/* let school = ["Osvaldo", "Marco", "Rolando", "Davinia", "Carlos", "Pilar","Pepe"];

let order = school.sort();
console.log(order); */

let nombres = ["Osvaldo", "Marco", "Rolando", "Davinia", "Carlos", "Pilar","Pepe"];

let n = nombres.length;
let swapped;

// Mostrar lista inicial
console.log("Lista inicial:", nombres);

for (let i = 0; i < n - 1; i++) {
    swapped = false;
    console.log(`\nPasada ${i + 1}:`);
    
    for (let j = 0; j < n - 1 - i; j++) {
        console.log(`  Comparando "${nombres[j]}" con "${nombres[j + 1]}"`);
        
        if (nombres[j] > nombres[j + 1]) {
            console.log(`    Intercambiando "${nombres[j]}" con "${nombres[j + 1]}"`);
            let temp = nombres[j];
            nombres[j] = nombres[j + 1];
            nombres[j + 1] = temp;
            swapped = true;
        }
        
        // Mostrar el estado de la lista después de cada comparación
        console.log("    Estado actual de la lista:", nombres);
    }
    
    if (!swapped) {
        console.log("No hubo intercambios, la lista ya está ordenada.");
        break;
    }

    // Mostrar el estado de la lista después de cada pasada
    console.log("Lista después de la pasada:", nombres);
}

// Mostrar lista final
console.log("\nLista final ordenada:", nombres);