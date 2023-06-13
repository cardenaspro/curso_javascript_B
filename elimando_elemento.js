/*
Resumen:

Agregar al final= .push()
Eliminar al final= .pop()

Agregar al inicio= .unshift()
Eliminar al inicio= .shift()
*/

/* Array Numeros */
let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()  
// resultado [1,2,3,4,5,6,7]


/* Array String*/

let txtArray = ["ana", "carlos", "karina", "luz"]

addCharacters();

function addCharacters(){
    txtArray.push("alex", "gaby")
    console.log(txtArray)
};
// resultado ["ana", "carlos", "karina", "luz","alex", "gaby")]


/* Eliminando elementos del Array  shift() */
// Borra el 1er elemento de nuestro array
let shiftarray = ["ana", "carlos", "karina", "luz"]

let shiftArray = array.shift();
console.log(array);
// resultado [carlos", "karina", "luz"]

/* Eliminando elementos del Array  pop() */
// Borra el ultimo elemento de nuestro array

let array = ["ana", "carlos", "karina", "luz"]

let poptArray = array.pop();

console.log(array);
// resultado ["ana", "carlos", "karina"]