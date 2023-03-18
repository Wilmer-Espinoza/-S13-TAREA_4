function generarTabla() {
	// Obtener la base ingresada por el usuario
	const base = parseInt(document.getElementById("base").value);

	// Verificar que la base sea un número válido entre 1 y 12
	if (isNaN(base) || base < 1 || base > 12) {
	  alert("Por favor ingrese un número válido entre 1 y 12");
	  return;
	}

	// Generar la tabla de multiplicar
	let tabla = "";
	for (let i = 1; i <= 12; i++) {
	  tabla += `${base} x ${i} = ${base * i}\n`;
	}

	// Mostrar la tabla de multiplicar en el textarea
	document.getElementById("tabla-output").value = tabla;
  }