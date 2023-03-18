function calculate() {
	const input = document.getElementById("numbers").value;
	const numbers = input.split(",").map(Number);
	const exponents = exponentSelf(numbers);
	const result = exponents.join(", ");
	document.getElementById("rtd").innerHTML = `Los exponentes son: ${result}.`;
}

function exponentSelf(numbers) {
	const result = [];
	for (let i = 0; i < numbers.length; i++) {
		const exponent = Math.pow(numbers[i], numbers[i]);
		result.push(exponent);
	}
	return result;
}
