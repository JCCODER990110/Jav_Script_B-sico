/*

Objeto Math:

JavaScript tiene una serie de objetos globales integrados que nos son de utilidad. 
Por ejemplo, ya hemos visto y trabajado con el objeto console y su método log para 
ver información en nuestra consola. Otro de estos objetos es Math, que tiene varios
métodos propios.

Ejemplo de métodos de Math:

1. Math.pow :Este método nos permite potenciar un número. Por ejemplo, 2 elevado al cubo, sería 
igual a multiplicar 2 x 2 x 2. Es decir, 8.

Math.pow(2,3);

El primer número es la base, y el segundo será la potencia.

2. Redondeo de decimales: Math.round & Math.floor & Math.ceil; A veces necesitamos redondear 
un número decimal, ya que muchas veces las operaciones matemáticas pueden resultar en números 
con coma. Para esto, JavaScript nos ofrece tres métodos:

    A. Math.round redondeará el número decimal al entero más próximo. Es decir que, si 
    tenemos 0.49, el resultado será 0. En cambio, si tenemos 0.50, el resultado será 1.

    Math.round (0.49); -> 0
    Math.round (0.50); -> 1

    B. Math.floor redondeará el número decimal al entero de menor valor. Por ejemplo, si 
    tenemos el número 5.93, el resultado será 5.

    Math.floor(5.93); -> 5

    C. Math.ceil este método, al contrario que el anterior, redondeará un número al siguiente 
    entero. Por ejemplo, si tenemos 3.27 el resultado será 4.

    Math.ceil(3.27); -> 4

3. Math.max & Math.min: Estos dos métodos nos permitirán conocer el valor máximo o mínimo de un 
conjunto de números. Por ejemplo, si tenemos los números 1, 2, 3, 4 y 5, el máximo será el 5 y 
el mínimo el número 1.

Math.min(1, 2, 3, 4, 5); -> 1
Math.max(1, 2, 3, 4, 5); -> 5

4. Math.random: Este último método nos permitirá generar un número aleatorio. Es importante tener 
en cuenta que el número que se generará es decimal, y puede ser cualquiera entre el 0 y el 1.

Math.random();

*/