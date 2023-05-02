//función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo
function esPalindromo(cadena) {
    // Convertimos la cadena a minúsculas y eliminamos los espacios en blanco
    cadena = cadena.toLowerCase().replace(/ /g,'');
    
    // Comparamos el primer y último carácter, el segundo y penúltimo, y así sucesivamente
    for (var i = 0; i < cadena.length/2; i++) {
      if (cadena[i] !== cadena[cadena.length - 1 - i]) {
        console.log('No es un palindromo');
        return false; // Si los caracteres no coinciden, la cadena no es un palíndromo
        
      }
    }
    console.log('Es un palindromo');
    return true; // Si hemos llegado hasta aquí, la cadena es un palíndromo
    
  }

  //prueba
  esPalindromo('Hola Mundo'); //false
  esPalindromo('Somos o no somos'); //true
  