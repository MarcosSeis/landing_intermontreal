// Obtener la referencia al elemento span del contador
const contador = document.querySelector('.counter');

// Obtener la fecha actual
const fechaActual = new Date();

// Establecer la fecha anterior (15 de junio de 2023)
const fechaAnterior = new Date(2023, 5, 15); // El mes se indexa desde 0 (0 = enero)

// Calcular la diferencia en horas entre la fecha actual y la fecha anterior
const diferenciaHoras = Math.floor((fechaActual - fechaAnterior) / (1000 * 60 * 60));

// Crear los elementos span para cada dígito del contador
for (let i = 0; i < 6; i++) {
  const span = document.createElement('span');
  contador.appendChild(span);
}

// Función para actualizar el valor del contador
function actualizarContador() {
  const digitos = contador.querySelectorAll('span');

  // Convertir la diferencia de horas a una cadena de 6 dígitos
  const valorContador = diferenciaHoras.toString().padStart(6, '0');

  // Actualizar cada dígito del contador con su respectivo valor
  for (let i = 0; i < valorContador.length; i++) {
    if (i === 3) {
      continue; // Omitir el guion en la posición 3
    }
    digitos[i].textContent = valorContador[i];
  }
}

// Ejecutar la función inicialmente
actualizarContador();

// Función para incrementar el contador cada hora
function incrementarContador() {
  diferenciaHoras++;
  actualizarContador();
}

// Establecer un intervalo para llamar a la función cada hora
setInterval(incrementarContador, 3600000); // 3600000 milisegundos = 1 hora
