function obtenerArreglo() {
    // Obtener los valores de los inputs de texto
    var inicio = parseInt(document.getElementById("inicio").value);
    var fin = parseInt(document.getElementById("fin").value);

    // Crear el arreglo
    var arreglo = [];
    for (var i = inicio; i < fin; i++) {
      arreglo.push(i);
    }

    // Mostrar la respuesta
    document.getElementById("respuesta").innerHTML = "El arreglo es [" + arreglo.join(", ") + "]";
  }