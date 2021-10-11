

let listautos  = require('./autos');

let concesionaria = {
    /* completar */
   autos: listautos,
  buscarAuto : function (patente)
   {
      let autoexiste = this.autos.find(function(listautos){
            return patente == listautos.patente;
        });
        if (autoexiste)
            return autoexiste; 
        else
            return null
   },

   venderAuto : function (patente)
   {
      let autovendido = this.buscarAuto(patente)
        autovendido.vendido = true
   },


autosParaLaVenta :  function  ( )  
 {
let disponibles = this.autos.filter(function(listautos){
            return listautos.vendido == false;
        });
            return disponibles; 
 },

 autosNuevos :  function  ( )  
 {
let autosNuevos = this.autos.filter(function(listautos){
            return listautos.km  <= 100 && listautos.vendido == false;
        });
            return autosNuevos; 
 }
};

let result = concesionaria.autosParaLaVenta()
let losnuevos = concesionaria.autosNuevos ()
//concesionaria.venderAuto('APL123')
console.log (concesionaria.autosNuevos())