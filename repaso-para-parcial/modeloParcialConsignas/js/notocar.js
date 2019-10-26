
  function mostrarNotas(notas,color){
    var todasLasNotas = "Estas son las notas que has ingresado: ";
    for (var i = 0; i < notas.length; i++) {
        if (i+1 < notas.length) {
            todasLasNotas += notas[i] + ", ";
        }else{
            todasLasNotas += notas[i];
        }
    }
    var HTMLelement = document.querySelector("#todasLasNotas");
    HTMLelement.innerText = todasLasNotas;
    HTMLelement.style.color = color;
    document.querySelector('#js-1').style.backgroundColor = "gainsboro";
  };

  function mostrarUsuario(Usuario,booleano){
    var hobbies = "";
    var user = "";
    for (var atributo in Usuario) {
      if (Usuario.hasOwnProperty(atributo)) {
          if (atributo == "nombre") {
              // alert(atributo);
              user = "Hola <span style='font-size: 2rem; color: red;'>" +  Usuario.nombre + "</span>.";
          }else if (atributo == "edad") {
              // alert(atributo);
              user += "<br>";
              user += " tienes <span style='font-size: 2rem; color: red;'>" + Usuario.edad + "</span> años, estás muy bien para tu edad.";
          }else if (atributo == "estaVivo") {
              // alert(atributo);
              user += "<br>";
              if (Usuario.estaVivo == true) {
                  user += " que alivio que <span style='font-size: 2rem; color: red;'>vivas</span>!";
              }else if (Usuario.estaVivo == false) {
                  user += " es una pena que <span style='font-size: 2rem; color: red;'>no</span> estes vivo.";
              }
          }else if (atributo == "hobbies" && booleano == true) {
              // alert(atributo);
              for (var i = 0; i < Usuario.hobbies.length; i++) {
                  if (i+1 < Usuario.hobbies.length) {
                      hobbies += Usuario.hobbies[i] + ", ";
                  }else {
                      hobbies += Usuario.hobbies[i] + ".";
                  }
              }
              // alert(hobbies);
              user += "<br>";
              user += " por lo que nos dices, te gusta: ";
              user += "<br>";
              user += "<span style='font-size: 2rem; color: red;'>" + hobbies + "</span>";
          }else {
              alert("Las características que no aparecen, no son las que pide la consigna! Es por eso que el texto no queda bien! :-(")
          }
      }
    }
    // alert(user);
    document.querySelector("#usuario").innerHTML = user;
    document.querySelector('#js-2').style.backgroundColor = "gainsboro";
  };
