/*

Expresión Switch:

La expresión Switch evalúa una condición. Compara su valor con una instancia
case, y ejecuta declaraciones asociadas a ese case, así como las declaraciones
en los case que siguen.

switch (expresión) {
  case valor1:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor1
    [break;]
  case valor2:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
    [break;]
  ...
  case valorN:
    //Declaraciones ejecutadas cuando el resultado de expresión coincide con valorN
    [break;]
  default:
    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
    [break;]
}

*/

/*

Bucle Do-While:

El bucle Do-While (hacer mientras) ejecuta una sentencia especificada, hasta 
que la condición de comprobación se evalúa como falsa. La condición se evalúa 
después de ejecutar la sentencia, dando como resultado que la sentencia 
especificada se ejecute al menos una vez.

*/

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345"

/*

Declaración Continue:

La declaración continue se utiliza dentro de los Bucles For. Nos permite omitir
alguna de las iteraciones si se cumple una condición específica.

*/

i = 0;
n = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  n += i;
}

/*

Ejemplo: Usando continue con una etiqueta:

En el siguiente ejemplo, una sentencia etiquetada checkiandj contiene una sentencia
etiquetada checkj. Si se encuentra continue, el programa continua hasta encima de la 
sentencia checkj. Cada vez que se encuentra continue, checkj se reitera hasta que su 
condición devuelve false. Cuando se devuelve false, el recordatorio de la sentencia 
checkiandj se completa.

*/

checkiandj: while (i < 4) {
    document.write(i + "<br>");
    i += 1;
  
    checkj: while (j > 4) {
      document.write(j + "<br>");
      j -= 1;
      if (j % 2 == 0) continue checkj;
      document.write(j + " is odd.<br>");
    }
    document.write("i = " + i + "<br>");
    document.write("j = " + j + "<br>");
}


/*

Break:

La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar 
el bucle con antelación si se cumple una condición específica.

Break
La declaración break se utiliza dentro de los Bucles For. Nos permite "romper" o finalizar 
el bucle con antelación si se cumple una condición específica.

*/

function comprobarBreak(x) {
    var i = 0;
    while (i < 6) {
      if (i == 3) break;
      i++;
    }
    return i * x;
};

comprobarBreak(10);
