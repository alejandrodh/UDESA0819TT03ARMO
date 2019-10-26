var probandoConsola = "Hola Ale. Archivo linkeado por ruta"
console.log(probandoConsola);

var edad = 28 //numerica
var peso = "what?!"
var numero = 120
var division = numero/2

console.log(edad, peso)
console.log(division)

edad = [1,2,"hola"]; //array
console.log(edad)

edad = "Soy Ale." //string

console.log(edad)

var numeroA = 30
var numeroB = 45
console.log(numeroA, numeroB);
var numeroC = numeroA //30
numeroA=numeroB
numeroB = numeroC
console.log(numeroA, numeroB);


var alumno1 = {
  nombre: "Ale",
  curso: "UdeSA",
  anio: 2019,
  saludo : function(){
      return "Hola " + this.nombre
  }
}
var alumno2 = {
  nombre: "Gian",
  curso: "UdeSA",
  anio: 2019,
  saludo : function(){
      return "Hola " + this.nombre
  }
}
console.log(alumno1.saludo(), alumno2.saludo());


function triangulo(base, altura){
    var area = (base * altura)/2
    return area
}

var resultado = triangulo(100, 2)
//console.log(resultado);

var data = document.body.innerHTML= "<p>" + triangulo(100, 2) + "</p>"
document.querySelectorAll(p)





//
