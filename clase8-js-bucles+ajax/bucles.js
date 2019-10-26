var alumnos = [
  "Ayerza, Matías",
  "Bruno, Grottesi Delía",
  "Casas, Francisco Casiano",
  "Estrada, Marcos",
  "Fernandez Abadie, Joaquin",
  "Fernandez Olveira, Lara Agustina",
  "Fox, Abril",
  "García Blad, María Belén",
  "Hancevic, Milagros",
  "Jaichenco, Mora",
  "Vaccarezza, Tomás",
  "Jamui, Ian",
  "Karl, Timoteo",
  "Krüger, Matias",
  "Lazarte, Demián",
  "Lombardi, Mercedes",
  "Lucioni, Juan Martin",
  "Mansilla, Justo Enrique",
  "Matías, Evangelista",
  "Melinsky, Martin",
  "Ortiz, Lautaro",
  "Pezzi, Gianfranco",
  "Presaras, Pedro",
  "Proto Cassina, Mauro",
  "Rattagan, Jim",
  "Rosino, María Virginia",
  "Tojeiro, Bruno Augusto"
];

console.log(alumnos);
var saludar = function(){
   return "Hola Ale."
}

//Como leer un bucle for.
// for(El inicio: es un variable; la condición de corte ; incrementar el valor de la variable luego de ejecutar el código entre llaves){
//   //SE ejecuta si la condición de corte es == TRUE
// }

// Es un bucle: repite un código. El bucle esta mostrando los datos por consola.
for (var i = 0; i<10; i=i+1){
  console.log("hola: " + i);
}


//Capturemos el elemento html en el que vamos a insertar la lista de alumnos.
lista = document.querySelector(".lista");

for(var i = 0; i<alumnos.length; i = i+1){
  if(alumnos[i] !== "Vaccarezza, Tomás"){
    lista.innerHTML = lista.innerHTML + '<li>' + alumnos[i] +'</li>'
  }
}
