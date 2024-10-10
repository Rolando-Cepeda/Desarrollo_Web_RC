
/* // 1.- Número de enlaces de la PÁGINA.
let links = document.getElementsByTagName("a");
let numLinks = links.length;
alert("El número de enlaces es: " + numLinks)
 */



/* // 2.- Dirección a la que enlaza el penúltimo enlace.
let links = document.getElementsByTagName("a");
let penultimateLink = links[links.length-2];
alert("The direction to penultimate Link is: " + penultimateLink); */




// 3.- Numero de enlaces que enlazan a http://prueba
let link = document.getElementsByTagName("a");
let count = 0;
let n = link.length;

for (let i = 0; i < n; i++) {
    if (link[i].href === "http://prueba/") {
       count++;
    }
   
}
alert("El número de enlaces que en lazan a http://prueba son: " + count);