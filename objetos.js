// Ejemplo de objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
};
miAuto.marca

// Metodos de objetos
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.año}`)
    }
};
miAuto.detalleDelAuto();