var articulos = [
    {nombre: "Bici", costo: 300},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Audifonos", costo: 1320},
]

// Filtrar ciertas cosas si es verdad o falso
// filter() : Devuelve todos los elementos del array que cumplan con la condición dada
// ###################################################################
var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});
articulosFiltrados

// Ayudar a mapear ciertos articulos
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});
nombreArticulos

// METODO FIND valida un true o false
// find() : Devuelve el primer elemento del array que cumpla con la condición dada
var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.nombre === "Laptop"
});
encuentraArticulo

// ******************************************************************
// METODO forEach() valida realiza un filtrado sobre el array
// foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});


// ******************************************************************
// METODO some() regresa una validacion de verdadero o falso
// some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});