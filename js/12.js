function lastDigit(num) {
    let number = num.toString();
    let lastChart = number.charAt(number.length - 1);
    let digit = parseInt(lastChart);
    return digit;
  }

function obtenerUltimoDigito() {
    // Obtener el valor ingresado en el input
    const numero = document.getElementById("numero").value;

    // Obtener el último dígito del número utilizando la función lastDigit
    const ultimoDigito = lastDigit(numero);

    // Mostrar el último dígito encontrado en la página
    document.getElementById("respuesta").innerHTML = "Último dígito: " + ultimoDigito;
}