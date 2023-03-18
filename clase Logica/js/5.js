function generarTabla() {
	const base = parseInt(document.getElementById('base').value);
	const tablaMultiplicar = document.getElementById('tabla-multiplicar');

	// Limpiar la tabla de multiplicar previa
	tablaMultiplicar.innerHTML = '';

	// Generar la tabla de multiplicar
	for (let i = 1; i <= 12; i++) {
		const resultado = base * i;
		const fila = document.createElement('tr');
		const numero = document.createElement('td');
		const resultadoTd = document.createElement('td');

		numero.textContent = i;
		resultadoTd.textContent = resultado;

		fila.appendChild(numero);
		fila.appendChild(resultadoTd);

		tablaMultiplicar.appendChild(fila);
	}
}
