

// Primero lo primero. Una de las primeras cosas que deberíamos hacer en nuestro archivo JS para asegurar que no tengamos problemas a futuro es encerrar todo nuestro código dentro del evento onload. Tu trabajo entonces, es definir este evento.
window.onload = function(){

  // Bien, vamos asegurar que esté todo bien vinculado agregando un alert en el archivo dentro del evento onload. Luego y con la tranquilidad de que todo funciona bien, eliminaremos la alerta.
  alert("Está todo ok.");

  // Hora de definir un primer evento:
  // Debes definir un evento al hacer click en el botón que dice Abracadabra
  // Al hacer click deberás lanzar un prompt que le diga al usuario que ingrese su nombre.
  // Tras ingresar su nombre, debes reemplazar el texto que dice “Hi, I’m Jane Doe” por “Hi, I’m NOMBRE” donde NOMBRE debe ser el nombre ingresado por el usuario.
  var abracadabra = document.querySelector("#abracadabra");
  abracadabra.onclick = function(e){
      var nombre = prompt("Ingrese su nombre");
      var titulo = document.querySelector("#titular");
      var strong = titulo.querySelector("strong")
      strong.innerText = nombre;
  }

  // Vamos con un segundo evento que suceda en el botón que dice Get in touch with me pero cuando se haga doble click sobre el mismo. En ese caso, modificar el color del párrafo con clase  “parrafo-color” (se encuentra arriba del botón)  al color rojo.
  // (Todo esto se encuentra en el footer de nuestro HTML)

 var inTouch = document.querySelector("#touch");
 inTouch.ondblclick = function(e){
   var parrafo = document.querySelector(".parrafo-color")
    //parrafo.style.color = "red";
   parrafo.style.color = colorAlAzar();
 }

 // Definir una función colorAlAzar. Esta función debe armar un array con 5 colores. Luego, sortear al azar un número entre 0 y 4 y retornar el color correspondiente del array.
function colorAlAzar(){
  color = ["violet", "black", "red", "blue", "orange"];
  var numero = Math.floor(Math.random()*5)
  return color[numero];
}

// Modificar el evento de doble click sobre el botón Get in touch with me para que el texto se modifique a un color al azar en vez de siempre pasar a rojo… DONE.


// Definir 3 eventos sobre los 3 elementos que se presentan en la foto (Estamos refiriendonos a las etiquetas section aunque tendrás que modificar el HTML para poder ser específico). Al hacer click sobre estos elementos deberás:
// Obtener el h3 dentro del elemento clickeado. Para esto recomendamos utilizar this.querySelector. Funciona muy similar al document.querySelector pero solo busca dentro del elemento clickeado.
// Imprimir en un alerta el mensaje “Clickeaste sobre Consequat Lorem”. Donde el texto debe ser reemplazado por el contenido del h3

//Para solucionar el punto 1 agregué las clases left, center y right en cada una de las secciones a capturar.

var left = document.querySelector(".left");
var center = document.querySelector(".center");
var right = document.querySelector(".right");

left.onclick = function(e){
  var texto = this.querySelector("h3").innerText;
  alert(texto);
}
center.onclick = function(e){
  var texto = this.querySelector("h3").innerText;
  alert(texto);
}
right.onclick = function(e){
  var texto = this.querySelector("h3").innerText;
  alert(texto);
}

// Generar 2 eventos sobre el botón que dice “See some of my recent work”
// Cuando se pase el mouse por encima, el párrafo que se encuentra justo encima debe cambiar de color a un color al azar
// Al quitar el mouse del botón, el párrafo debe volver a su color original #888

var see = document.querySelector(".style2");

see.onmouseover = function(e){
  console.log("hola");
  var textoArriba = this.querySelector(".footer");
  console.log(textoArriba);

}













}
