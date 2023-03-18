function sumPerfectNumbers() {
	const input = document.getElementById("numbers").value;
	const numbers = input.split(",").map(Number);
	let sum = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (isPerfectNumber(numbers[i])) {
			sum += numbers[i];
		}
	}
	document.getElementById("result1").innerHTML = `La suma de los números perfectos es ${sum}.`;
}

function isPerfectNumber(num) {
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) {
			sum += i;
		}
	}
	return sum === num;
}