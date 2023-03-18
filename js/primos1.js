function showPrimes() {
	const input = document.getElementById("numbers").value;
	const numbers = input.split(",").map(Number);
	let primes = [];
	for (let i = 0; i < numbers.length; i++) {
		if (isPrime(numbers[i])) {
			primes.push(numbers[i]);
		}
	}
	if (primes.length === 0) {
		document.getElementById("result").innerHTML = "No hay números primos en la serie.";
	} else {
		document.getElementById("result").innerHTML = `Los números primos son ${primes.join(", ")}.`;
	}
}

function isPrime(num) {
	if (num < 2) {
		return false;
	}
	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
}
