/*A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas,
sólo por minúsculas o por una mezcla de ambas*/
function informacionTexto(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas");
    } else {
      console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }
  

informacionTexto("HOLA"); // La cadena está formada solo por mayúsculas
informacionTexto("adiós"); // La cadena está formada solo por minúsculas
informacionTexto("Hola Mundo"); // La cadena está formada por una mezcla de mayúsculas y minúsculas
