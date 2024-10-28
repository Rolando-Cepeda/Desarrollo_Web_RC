# Web Storage y Métodos de Object
	## Local Storage vs Session Storage
		### Las claves no se repiten y si NO existen, las crea.
	## Al escribir stringify
	## Al leer parse

# Parámetros opcionales
	## Los parámetros obligatorios se pone al principio(izquierda) y los que llevan el signo IGUAL son opcionales.
	## Si no se especifica el parámetro, se toma el valor por defecto.

# Desestructuración
	## Manera más simple de escribir el código.
	## Busca los valores por CLAVE.


# 14_3 Spread y Rest
## Spread.- Se utiliza para pasar un arreglo o objeto a una función.
	
## REST.- Le paso valores INDIVIDUALES y me los convierte en un ARRAY


## 14_4 Excepciones.- Son ERRORES en EJECUCIÓN
	### Gestión de excepciones (acceso a BASE DE DATOS)
	### Se pueden manejar con try-catch
		* function f(){
		console.log('Hola');
		}
		try {
			f();
		} catch {
			//Si se produce el error en ejecución.
			console.log('Se ha producido una excepción');
		} finally {
			//Se ejecuta siempre, independientemente de si se produjo un error o no
			console.log('El finally se ejecuta sí o sí');
		}
	
## throw.- Lanzar excepciones propias(lanzar un error)
	### throw new Error('Error personalizado')
	## Si dentro de un objeto meto un metodo toString lo ejecuta.