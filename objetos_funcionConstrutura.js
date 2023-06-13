// Funcion constructora de mis elementos
function auto(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
// Construccion del objeto
var autoNuevo = new auto("Tesla","Model 3","2023");
var autoNuevo2 = new auto("Tesla","Model x","2020");
var autoNuevo3 = new auto("Toyota","Corolla","2021");