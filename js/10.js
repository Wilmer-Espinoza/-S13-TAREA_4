function obtenerDigitosPares() {
    // Obtener el valor ingresado en el input
    const numero = document.getElementById("numero").value;

    // Convertir el número a string para poder acceder a cada dígito
    const numeroString = numero.toString();

    // Crear una variable para guardar los dígitos pares encontrados
    let digitosPares = "";

    // Recorrer cada dígito del número
    for (let i = 0; i < numeroString.length; i++) {
        // Obtener el dígito en la posición actual
        const digito = parseInt(numeroString[i]);

        // Verificar si el dígito es par
        if (digito % 2 === 0) {
            // Agregar el dígito a la lista de dígitos pares
            digitosPares += digito + ",";
        }
    }

    // Mostrar los dígitos pares encontrados en la página
    document.getElementById("respuesta").innerHTML = "Dígitos pares: " + digitosPares;
}