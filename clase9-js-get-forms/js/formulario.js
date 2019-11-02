var form = document.querySelector("form");
var usuario = document.querySelector('input[name="usuario"]');
var password = document.querySelector('input[name="password"]');

form.onsubmit = function(e){
  e.preventDefault();

  if (usuario.value == ""){
    //imprimir un error en pantalla.
    var errorUsuario =  usuario.parentElement.querySelector("small");
    errorUsuario.innerText ="El campo es obligatorio."

  } else if (password.value == ""){
    //imprimir un error en pantalla.
    var errorPass =  password.parentElement.querySelector("small");
    errorPass.innerText ="El campo es obligatorio."
  } else {
    location.href = "exito.html"
  }
}
