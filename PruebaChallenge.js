function foo(palabra){
    return palabra.split('').sort().join('');
}

console.log(foo('banana'));

function foo2(n){
    return n ** 2;
};

console.log(foo2(10));

function foo3(objeto){
    var suma = 0;
    for (let clave in objeto) {
        suma += objeto[clave];
    };
    return suma;
}

console.log(foo3({a: 1, b: 2, c: 3}));

function foo4(objeto, prop){
    delete objeto[prop];
    return objeto;
}

console.log(foo4({a: 1, b: 2}, 'b'));

function foo5(str){
    return str.replace('a','z');
}

console.log(foo5('casa'));

console.log(2 + 3 * 4 / 2);

console.log('10' - 5 + '5');

console.log(5 <= 5  && 2 < 3);

console.log(5 + 3 % 2);

console.log('10' < '2');