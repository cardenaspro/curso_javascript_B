// *********************************************************
//aqui se da el hoisting en las variables
//donde la variable es usada antes de ser declarada
console.log(miNombre);
var miNombre = "Jerson";

hey();

function hey() {
    console.log("hola " + miNombre);
}

var miNombre = "Jerson";

//Lo ideal es que se declaren la funciones al inicio




// **********************************************************

//MALA PRACTICA, EVITA EL HOISTING, NO RECOMENDABLE
miNombre();

function nombre (){ //Local
    var miApellido = "Sanchez";
    console.log(miNombre + " " +miApellido)
}

var miNombre = "Maximo";

/**
 * JavaScript es tan poderoso que entiende aunque tu codigo este desordenado
 * pero es una mala practica tener elcodigo así
 * Lo recomendable es declarar las variables y despues, despues la función y sus instrucciones
 * y por ultimo mandar a llamar la funcion
 * tal como se muestra abajo
 */

 //BUENA PRACTICA
var miNombre = "Maximo";

function nombre (){
    var miApellido = "Sanchez";
    console.log(miNombre + " " +miApellido)
}

miNombre();