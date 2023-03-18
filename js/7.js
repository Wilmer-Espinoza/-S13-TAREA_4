function sumDivisor(num, init) {
    let result = 0;
    for (i = init; i < num; i++) {
        if (num % i === 0) {
            result += i;
        }
    }
    return result;
}

function calcularSumaDivisores() {
    const num = parseInt(document.getElementById("num").value);
    const init = parseInt(document.getElementById("init").value);
    const resultado = document.getElementById("resultado");
    resultado.value = "La suma de los divisores de " + num + " a partir de " + init + " es: " + sumDivisor(num, init);
}

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calcularSumaDivisores);