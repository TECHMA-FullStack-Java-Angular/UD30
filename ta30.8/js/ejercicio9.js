//funcion que recibe como parametro un numero entero y devuelve cadena de texto indicando si es par o impar
function parImpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  //mostrar por pantalla
  console.log(parImpar(4)); // El número es par
  console.log(parImpar(7)); // El número es impar
  console.log(parImpar(0)); // El número es par
  