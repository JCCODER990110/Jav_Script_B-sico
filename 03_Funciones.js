// Estructura de una función

function sumaTres(x) {
    console.log(x + 3);
}

sumaTres (5)

// ____________________________________

function sumaTres(x) {
    return x + 3;
}

var sumaTres = function(x) {
    return x + 3;
}

var sumaTres = (x) => {
    return x + 3;
}


/* El console.log(); solo se usa en la fase de programación para mostrar
en la consola, una vez terminemos de probar, se deben olvidar. 
IMPORTANTE!!! es muy diferente al return */


/* NOMENCLATURAS:

CamelCase: Este modo de nombrar implica la unión de dos o más palabras sin 
espacios entre ellas, pero diferenciadas por una letra mayúscula inicial a 
partir de la segunda palabra, por ejemplo: holaMundo / funcionEdadAños.

PascalCase: Es similar a camelCase pero la primera letra de la frase también 
se inicia con mayúscula, al igual que cada palabra. Se mantiene la práctica de 
no tener espacios entre palabras y cada palabra siempre empieza con su primera 
letra mayúscula. Por ejemplo: HolaMundo / FuncionEdadAños.

snake_case: La nomenclatura snake_case  es definida de esta forma porque siempre
la usamos sobre el piso. Las letras siempre  serán minúsculas y las  palabras
están separadas por un guion bajo de esta forma: hola_mundo / funcion_edad_años

*/



