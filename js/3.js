function calculate() {
	const base = Number(document.getElementById("base").value);
	const exponent = Number(document.getElementById("exponent").value);
	const result = power(base, exponent);
	document.getElementById("rst").innerHTML = `${base} elevado a ${exponent} es igual a ${result}.`;
}

function power(base, exponent) {
	let result = 1;
	for (let i = 0; i < exponent; i++) {
		result *= base;
	}
	return result;
}
