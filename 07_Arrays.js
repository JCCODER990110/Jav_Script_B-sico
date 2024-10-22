// Lista de compras
listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

var nombres = ['Matias', 'Maria', 'Diego', 'Rosa'].length;
console.log(nombres);

/* Métodos para Arrays

Métodos de inserción

1. El método push() añade uno o más elementos al final de un arreglo, y devuelve 
la nueva longitud del array.

2. El método pop() elimina y devuelve el último elemento de un arreglo.

3. El método unshift() agrega uno o más elementos al inicio de un arreglo, y 
devuelve la nueva longitud del array.

4. El método shift() elimina y devuelve el primer elemento de un arreglo.

Métodos varios

1. El método includes() determina si un arreglo incluye o contiene un 
elemento específico. Devuelve true o false en cada caso.

2. El método every() determina si todos los elementos en un arreglo 
satisfacen una misma condición.

3. El método split() convierte un string en un arreglo, donde cada 
elemento contendrá un sub-string, dependiendo del parámetro divisor que indiquemos.

4. El método join() convierte un arreglo en un string, uniendo todos los elementos 
de este en una misma cadena.

Métodos de recorrido

1. El método forEach() nos permite recorrer un arreglo, realizando alguna acción en 
para cada elemento.

2. El método map() también nos permite recorrer un arreglo y realizar una acción por 
cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados.

*/

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// PUSH y UNSHIFT
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);
// POP y SHIFT
colores.shift();
colores.pop();

console.log(colores);
// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);
// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);


/* BUCLES EN ARRAYS:

Bucle For:

Crea un bucle que consiste en tres expresiones opcionales, encerradas en paréntesis y 
separadas por puntos y comas, seguidas de una sentencia ejecutada en un bucle.

Sintaxis: for ([expresion-inicial]; [condicion]; [expresion-final])sentencia 

Bucle While

Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe 
como verdadera. Dicha condición es evaluada antes de ejecutar la sentencia.

Sintaxis: while (condicion)
-> sentencia

Bucle infinito

Esto no es un nuevo tipo de bucle, sino algo que se puede producir en los que ya aprendimos. 
Un bucle infinito se produce cuando un bucle comienza a ejecutarse, pero jamás termina. Esto 
se debe a que nunca se llega a la condición de quiebre.

Esto consume muchos recursos de la computadora, por lo que hay que intentar evitarlos. 

*/

// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

