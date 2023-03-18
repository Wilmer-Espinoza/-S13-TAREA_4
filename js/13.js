function calcularFactorial() {
    // Obtener el valor del input de texto
    var numero = parseInt(document.getElementById("numero").value);

    // Calcular el factorial
    var factorial = 1;
    for (var i = 1; i <= numero; i++) {
      factorial *= i;
    }

    // Mostrar la respuesta
    document.getElementById("respuesta").innerHTML = "El factorial de " + numero + " es " + factorial;
  }