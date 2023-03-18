function divisores(number, init) {
	let result = [];
	for (i = init; i <= number; i++) {
	  if (number % i === 0) {
		result.push(i);
	  }
	}
	return result;
}

function mostrarDivisores() {
	const number = parseInt(document.getElementById("number").value);
	const init = parseInt(document.getElementById("init").value);
	const resultado = document.getElementById("resultado");
	resultado.innerHTML = "Divisores: " + divisores(number, init).join(", ");
}

const btnMostrarDivisores = document.getElementById("btnMostrarDivisores");
btnMostrarDivisores.addEventListener("click", mostrarDivisores);
