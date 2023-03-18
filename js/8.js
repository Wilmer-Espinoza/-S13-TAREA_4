function obtenerDigitos() {
    // Obtener el valor ingresado en el input
    const numero = document.getElementById("numero").value;

    // Convertir el número a string para poder acceder a cada dígito
    const numeroString = numero.toString();

    // Crear un arreglo para guardar los dígitos del número
    let digitos = [];

    // Recorrer cada dígito del número en orden inverso
    for (let i = numeroString.length - 1; i >= 0; i--) {
        // Obtener el dígito en la posición actual
        const digito = parseInt(numeroString[i]);

        // Agregar el dígito al arreglo de dígitos
        digitos.push(digito);
    }

    // Mostrar los dígitos encontrados en la página
    document.getElementById("respuesta").innerHTML = "Dígitos: " + digitos;
}