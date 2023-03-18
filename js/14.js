function calcularFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

function calcularFactoriales() {
    // Obtener el valor ingresado en el input y convertirlo a un arreglo de números
    const numeros = document.getElementById("numeros").value.split(",").map(Number);

    // Calcular el factorial de cada número utilizando la función calcularFactorial
    const factoriales = numeros.map(calcularFactorial);

    // Mostrar los factoriales en la página
    document.getElementById("respuesta").innerHTML = "Factoriales: " + factoriales.join(", ");
}