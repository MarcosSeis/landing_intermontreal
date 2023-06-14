// Obtener el elemento del contador
var contadorElemento = document.getElementById("contador");

// Obtener el contador actual almacenado en el almacenamiento local
var contadorActual = localStorage.getItem("contador");

// Verificar si el contador existe en el almacenamiento local
if (contadorActual) {
  contadorActual = parseInt(contadorActual); // Convertir a número entero
  contadorActual++; // Incrementar el contador en 1
} else {
  contadorActual = 1; // Establecer el contador en 1 si no existe
}

// Guardar el contador actualizado en el almacenamiento local
localStorage.setItem("contador", contadorActual);

// Mostrar el contador en la página
contadorElemento.textContent = contadorActual;
