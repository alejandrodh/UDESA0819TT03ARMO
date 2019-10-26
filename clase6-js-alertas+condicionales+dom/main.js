var titulo = document.querySelector("h2");
// console.log(titulo);
console.log(titulo.innerText);

titulo.innerText = "Hola a todos";

var seccion = document.querySelector(".uno");
seccion.innerHTML += "<p>Soy un párrafo por JS</p>";


//Clases
var element = document.querySelector(".in_section");
element.classList.add("agregada-por-js");
//element.classList.remove("para-pruebas");
element.classList.toggle("para-pruebas");

element.style.display = "none";
