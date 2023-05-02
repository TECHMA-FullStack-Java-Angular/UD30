let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// Pedimos al usuario que introduzca su número de DNI y su letra
let dni = prompt("Introduce tu número de DNI (sin letra)");
let letraUsuario = prompt("Introduce la letra de tu DNI (en mayúsculas)");

// Comprobamos que el número de DNI es válido
if (dni < 0 || dni > 99999999) {
  alert("El número de DNI introducido no es válido");
} else {
  // Calculamos la letra correspondiente al número de DNI introducido
  let resto = dni % 23;
  let letraCalculada = letras[resto];

  // Comparamos la letra calculada con la letra introducida por el usuario
  if (letraUsuario !== letraCalculada) {
    alert("La letra introducida no es correcta");
  } else {
    alert("El número y la letra de DNI son correctos");
  }
}
