/* 
Solicita al usuario tres números enteros e indícale cuál es el menor.
*/

let n1 = parseInt(prompt("Escribe el primer número"));
let n2 = parseInt(prompt("Escribe el segundo número"));
let n3 = parseInt(prompt("Escribe tercer número"));

if (n1 < n2 && n1 < n3) {
    alert(`El número ${n1} es menor`);

} else if (n2 < n1 && n2 < n3) {
    alert(`El número ${n2} es menor`);
} else {
    alert(`El número ${n3} es menor`);
}

