var form = document.querySelector("form");

// function mostrarAlerta(){
//   alert("me clickeaste");
// }

// form.onsubmit = function(e){
//   e.preventDefault();
//   setTimeout(mostrarAlerta, 3000);
//   //mostrarAlerta();
//   console.log(e, this);
// }

//botonModal.onlcick = setTimeout(mostrarAlerta, 2000);



// Intervals
//*****************

var section = document.querySelector(".interval"); //A donde insertamos etiquetas p.
var inicia //tendrá el setInterval.
var link = document.querySelector(".misterio"); //Link que inicia el intervalo.
var counter = 0

link.onclick = function(e){
  e.preventDefault();
  console.log("arranca");
  inicia = setInterval(actualizar, 2000);
}

function actualizar(){
  //alert("2 segundos");
  section.innerHTML = section.innerHTML + "<p>Pasaron 2 segundos.</p>";
  counter = counter + 1;
  console.log(counter);
  if(counter === 3){
    clearInterval(inicia);
    console.log("llegué a " + counter);
  }
}
