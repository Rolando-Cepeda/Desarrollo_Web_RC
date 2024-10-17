/* 5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!
5! = 5 * 4 * 3 * 2 * 1 */

function fact(n) {
	if (n == 1) {
		return 1;
	} else {
		return n * fact(n - 1);
	}
}


const numero = 5;
fact(numero);

/* 
1 1 2 3 5 8 13...

*/

function fibo(posicion) {
	if (posicion == 1 || posicion == 2) {
		return 1;
	}else{
		return fibo(posicion) + fibo(posicion -1);
	}
}