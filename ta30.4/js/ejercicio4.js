let valores = [true, 5, false, "hola", "adios", 2];

//Cual de los dos elementos de texto es mayor

let texto1 = valores[3];
let texto2 = valores[4];

if(texto1.length > texto2.length) {
  console.log(`El texto "${texto1}" es mayor que el texto "${texto2}".`);
} else if(texto1.length < texto2.length) {
  console.log(`El texto "${texto2}" es mayor que el texto "${texto1}".`);
} else {
  console.log(`Los textos "${texto1}" y "${texto2}" tienen la misma longitud.`);
}

//determinar los operadores necesarios para obtener un resultado true y otro resultado false
let resultadoTrue = valores[0] || valores[2]; // true || false = true
let resultadoFalse = valores[0] && valores[2]; // true && false = false

console.log(resultadoTrue); // true
console.log(resultadoFalse); // false

// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
let suma = valores[1] + valores[5]; // 5 + 2 = 7
let resta = valores[1] - valores[5]; // 5 - 2 = 3
let multiplicacion = valores[1] * valores[5]; // 5 * 2 = 10
let division = valores[1] / valores[5]; // 5 / 2 = 2.5
let modulo = valores[1] % valores[5]; // 5 % 2 = 1

console.log("Suma: " + suma); // 7
console.log("Resta: " + resta); // 3
console.log("Multiplicación: " + multiplicacion); // 10
console.log("División: " + division); // 2.5
console.log("Módulo: " + modulo); // 1
