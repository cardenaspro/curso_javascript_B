// Funciones Declarativas

function miFuncion(){
    return 3;
}

miFuncion();

// Funciones de Expresion

var miFuncion = function (a,b){
    return a + b;
}

miFuncion();

// ******
function saludarEstudiantes(estudiante){
    console.log(estudiante);
}
saludarEstudiantes("Jerson");


function saludarEstudiantes(estudiante){
    console.log(`Hola ${estudiante}`);
}
saludarEstudiantes("Jerson");

// *******
function sumar(a,b){
    var resultado = a + b;
    return resultado;
}
sumar(1,2);

function sumar(a,b){
    return a + b;
}
sumar(1,2);