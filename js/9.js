function sumarDigitos() {
    // Obtener el valor ingresado en el input
    const numero = document.getElementById("numero").value;

    // Convertir el número a string para poder acceder a cada dígito
    const numeroString = numero.toString();

    // Crear una variable para guardar la suma de los dígitos
    let suma = 0;

    // Recorrer cada dígito del número
    for (let i = 0; i < numeroString.length; i++) {
        // Obtener el dígito en la posición actual
        const digito = parseInt(numeroString[i]);

        // Sumar el dígito a la suma total
        suma += digito;
    }

    // Mostrar la suma de los dígitos en la página
    document.getElementById("respuesta").innerHTML = "Suma de los dígitos: " + suma;
}