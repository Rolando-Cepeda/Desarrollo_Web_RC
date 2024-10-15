// Manipulación del DOM a través de JAVASCRIPT.

// Crea un TD con el texto que le ponga
function crearTd(texto) {
	let nodoText = document.createTextNode(texto);
	let nodoTd = document.createElement("td");
	nodoTd.appendChild(nodoText);
	return nodoTd;

}

// Crea una FILA
function crearTr(datosTds) {
	let nodoTr = document.createElement("tr");
	for (let i = 0; i < datosTds.length; i++) { // filas
		nodoTr.appendChild(crearTd(datosTds[i])); // Le va metiendo todos los TD dentro
	}

	return nodoTr;
}

// Crear la TABLA.
function crearTable(datosTrs) {
	let nodoTable = document.createElement("table");
	for (let i = 0; i < datosTrs.length; i++) { // filas
		nodoTable.appendChild(crearTr(datosTrs[i])); // Le va metiendo todos los TD dentro
	}

	return nodoTable;
}

const datosTrs = [
					["a", "b", "c", "d"], 
					["e", "f", "g", "h"]
				];

document.body.appendChild(crearTable(datosTrs));

