// Pedimos al usuario que ingrese un número entero
let numero = parseInt(prompt("Ingrese un número entero: "));

// Verificamos que el número ingresado es válido
if (isNaN(numero) || numero < 0) {
  console.log("El número ingresado no es válido");
} else {
  let factorial = 1;
  
  // Utilizamos la estructura for para calcular el factorial
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }
  
  alert(`El factorial de ${numero} es ${factorial}`)
  console.log(`El factorial de ${numero} es ${factorial}`);
}
