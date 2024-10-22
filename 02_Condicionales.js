/*

La estructura para los condiconales es muy parecida a la de python, la diferencia radica
en que no existe la sentencia elif, sin embargo, lo reemplaza muy bien con un else if directo
para proceder con otra sentencia.

*/

function viajar(destino) {
    if(destino === 'Brasil') {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  }

viajar('Brasil');
viajar('Argentina');

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
}
  
puedeManejar(17);

function esNuloOIndefinido(valor) {

    if (typeof valor == "object"){
        if (valor === null) {
            return true;
        }
    } else if (typeof valor == "undefined") {
        if (valor === undefined) {
            return true;
        }
    } else {
        return false;
    }
  
}

function tienenMismaLongitud(str1, str2) {

    if (str1.length == str2.length){
      return true;
    } else {
      return false;
    }
  
}


