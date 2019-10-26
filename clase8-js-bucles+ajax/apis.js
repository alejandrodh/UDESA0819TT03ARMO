//Objeto literal
var auto = {
  marca: "honda",
  modelo: "civic",
  anio: 2019,
  conductores: ["juan", "mariana"],
}

var json = {
  "data": [
    {
      "nombre":"martin",
      "edad":"29",
      "curso": "fullstack"
    },
    {
      "nombre":"belen",
      "edad":"22",
      "curso": "marketing"
    },
    {
      "nombre":"juan",
      "edad":"23",
      "curso": "negocios udesa"
    },

  ]};

  var string = JSON.stringify(json); //Transforma un objeto JSOn a cadena de texto.
  var aJson = JSON.parse(string); //Transforma una cadena de texto a un objeto JSON.


console.log(auto);
console.log(string);
console.log(aJson);


//Traemos todas las provincias y las mostramos dentro de un <ul> en el html.
fetch('https://apis.datos.gob.ar/georef/api/provincias')
  .then(function(respuesta){
    //console.log(respuesta);
    return respuesta.json();
  })
  .then(function(datos){
    //procesamos la info que vino desde la url.
    var provincias = datos.provincias;
    var lista = document.querySelector(".lista");

    for(var i=0; i<provincias.length; i++){
       lista.innerHTML += '<li>' + provincias[i].nombre + '</li>'
      //console.log(provincias[i].nombre)
    }
  })

//Traemos un Gif random del endpoint que nos provee la API de Giphy.
fetch('https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=G')
  .then(function(respuesta){
    return respuesta.json()
  })
  .then(function(datos){
    console.log(datos);//aca vemos los datos que mando la url.
    var randomGif = datos.data.images.original.url
    var gif = document.querySelector(".gif")
    gif.src = randomGif;

  })

  //Traemos los gifsg más vistos del endpoint que nos provee la API de Giphy.
  var urlMasVistos = 'https://api.giphy.com/v1/gifs/trending?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&limit=5&rating=G'

  fetch(urlMasVistos)
    .then(function(respuesta){
      return respuesta.json()
    })
    .then(function(datos){
      console.log(datos);//aca vemos los datos que mando la url.
      var trends = document.querySelector(".trends");//Es el elemento de html a donde quiero poner los datos de la API.
      var gifs = datos.data

      for (var i=0; i<gifs.length;i++ ){
        trends.innerHTML += '<li>' + '<img src="' + datos.data[i].images.original.url + '">' + '</li>'
      }

    })



//Podemos colocar la llamada AJAX dentro de una función para usarla en algún momento determinado. Por ejemplo asociado a un evento onclick. ¿Se animan a probarlo?

function cargarGif(){
  fetch('https://api.giphy.com/v1/gifs/random?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&tag=&rating=G')
    .then(function(respuesta){
      return respuesta.json();
    })
    .then(function(datos){
      var gif = document.querySelector('.gif');
      gif.src = datos.data.images.original.url;
      console.log(datos.data.images.original.url)
    })
}

//
//
//
//
//
//
//
//
//
// //
