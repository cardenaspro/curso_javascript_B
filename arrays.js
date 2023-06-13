// Array
var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas);

// Logitud del array
var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas.length);

//Acceder al array
var frutas = ["Manzana","Platano","Cereza","Fresa"];

console.log(frutas[0]);

//Añadir elemento al final del array con "PUSH"
var frutas = ["Manzana","Platano","Cereza","Fresa"];
var masFrutas = frutas.push("Uvas")
console.log(frutas);

//Eliminar elemento del array con "POP"
var frutas = ["Manzana","Platano","Cereza","Fresa"];
var ultimo = frutas.pop("Fresa");
console.log(frutas);

//Añadir elemento al INICIO del array con "UNSHIFT"
var frutas = ["Manzana","Platano","Cereza","Fresa"];
var nuevaLongitud = frutas.unshift("Lima");
console.log(frutas);

//Elimina elemento al INICIO del array con "SHIFT"
var frutas = ["Manzana","Platano","Cereza","Fresa"];
var nuevaLongitud = frutas.shift("Manzana");
console.log(frutas);

//Para buscar la posición de un elemento con "indexOf"
var nuevaLongitud = frutas.indexOf("Manzana");
console.log(frutas);