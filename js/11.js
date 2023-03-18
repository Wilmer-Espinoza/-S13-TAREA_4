function obtenerPrimerDigito() {
    // Obtener el valor del input de texto
    var numero = document.getElementById("numero").value;

    // Obtener el primer dígito del número
    var primerDigito = parseInt(numero.charAt(0));

    // Mostrar la respuesta
    document.getElementById("respuesta").innerHTML = "El primer dígito de " + numero + " es " + primerDigito;
  }