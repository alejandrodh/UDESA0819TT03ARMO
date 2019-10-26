//Variables

var saludo = "Hola";
var numero = 1223;
var arrays = ["hola", 123, numero];
var boolean = true;
var objetosLiterales = {
  nombre: "Ale",
  curso: "UdeSA Negocios Digitales",
  saludar: function(){
    return "hola" + this.nombre
  }
}

//Alertas
var alerta = alert("¿Estás ahí?"); //retorna undefined
var confirmar = confirm("¿Estás en clase de Negocios Digitales?"); // retorna true o false
//var respuesta = prompt("¿Cuál es tu nombre?"); //Retorna el string que cargó el usuario.

console.log(alerta);
console.log(confirmar);
//console.log(respuesta);

if(confirmar){
  alert("Bienvenido");
} else {
  alert("Faltaste");
}









//
