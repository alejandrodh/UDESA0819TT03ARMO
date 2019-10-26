console.log("javascript")

var string = "Repasando para el parcial"
var number = 87654
var boolean = true
var array = [string, number, boolean, ["hola", 8, true]]

console.log(array[0])

//Cambiamos hobbies por una lista de amigos.
var alumno = {
  nombre: "Alejandro",
  apellido: "Vivone",
  curso:"UdeSA",
  turno: "tarde",
  amigos : ["Martin", "María"],
  saludar: function(){
    return "Hola: " + this.nombre + " " + this.apellido
  },
  agregarAmigo: function(eh_Amigo){
    return this.amigos.push(eh_Amigo)
  },

}

alumno.agregarAmigo("Gonza")
alumno.agregarAmigo("Alex")
console.log( alumno )


/*
var notas = [4,5,6,7,8]
// lenght
console.log(notas.length)
// indexOf
var posicionElemento = notas.indexOf(4)
console.log(posicionElemento)

// push() Agerga datos a un array.
notas.push(10)
console.log(notas)

var objetoLiteral = {}

//Declaración de función
function sumar(num1, num2){
  var resultado = 0
  resultado = num1 + num2
  return resultado
}

//usar/ invocar/ ejecutar la función
var suma = sumar(90,10)
console.log(suma)


*/

























//
