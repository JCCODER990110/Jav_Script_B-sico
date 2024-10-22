var deportes = {
    conBalon: ['Futbol', 'Basketball', 'Golf'],
    sinBalon: ['Boxeo', 'Surf', 'Trekking'],
 };

 var persona = { 
    nombre: 'Lucas', 
    edad: 26, 
    estudios: { esProgramador: true } 
};
 
// ACCEDER
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
console.log(persona.edad);

// ASIGNAR
var persona = { nombre: 'Lucas', edad: 26, estudios: { esProgramador: true } };
persona.nombre = 'Martín';
console.log(persona.nombre);

//CREAR
var autos = {};
autos.marcas = ['Ford', 'Audi', 'Ferrari'];
console.log(autos);

//BORRAR
delete autos.marcas;
console.log(autos);

// Objetos de Funciones

var misFunciones = {
    saludar: function (){
        console.log('Hola');
    },
};

misFunciones.saludar();

/*

Formas de Usarlos:

Dot-Notation / Notación por Punto
Bracket-Notation / Notación por Corchetes

Muchas veces nos puede suceder que necesitemos utilizar una variable externa para guardarla }
como propiedad en un objeto. Es importante que en esos casos recordemos utilizar Bracket-Notation
sin comillas para que funcione correctamente.

*/

// DOT NOTATION

var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION

atuendos['piernas'] = ['Bermudas', 'Pantalones'];
console.log(atuendos);

var comidas = {};
var diferenciaDeNotaciones = function (propUno, PropDos){
    comidas [propUno] = ["Frutas", "Vegetales"];
    comidas [PropDos] = ["Hamburguesas", "Papas Fritas"];
};

diferenciaDeNotaciones('Saludables', 'No Saludables');
console.log(comidas);


// OBJETOS AVANZADOS

/*

Métodos de Objetos:

El método hasOwnProperty() nos permitirá especificar un nombre, y verificar si este existe 
como una propiedad dentro de un objeto. En cada caso devolverá true o false.

El método Object.keys() devuelve todas las propiedades de un objeto guardadas en orden 
dentro de un arreglo.

*/

// HAS OWN PROPERTY

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('nombre');

console.log(tienePropiedad);

// KEYS

var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// Recorrido de OBJETOS

var mundo = {Continentes: 7, paises: 195, oceanos: 5};

for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop);
    console.log('Este es el valor: ', mundo[prop]);
 }

 //THIS
 
var mascota = {
    animal: 'Perro',
    raza: 'Ovejero Alemán',
    amistoso: true,
    dueño: 'María López',
    info: () => {
       console.log('Mi perro es un  ' + this.raza);
    },
 };