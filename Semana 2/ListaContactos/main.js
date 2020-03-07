(function() {
  'use strict';

  console.log("Hola si ves esto tu java si");


  function saludo(texto) {
    console.log(texto);
  }
  saludo("Hola desde la funcion saludo");

  var boton = document.getElementById("guardar");
  console.log(boton);

  boton.addEventListener("click", function() {
    saludo("Hola desde el boton")

    crearFila()
  })

  function crearFila() {
    var nombre = document.getElementById("nombre")
    var apellido = document.getElementById("apellidos")
    var correo = document.getElementById("correo")
    var telefono = document.getElementById("telefono")
    console.log(nombre, apellido, correo, telefono);


    var tabla = document.querySelector(".list table");
    console.log(tabla);

    var nuevaFila = '< tr >'
      '<td >' Raul '</td>'
      '<td >' Amador '</td>'
       '<td >' raul @devf.mx '</td>'
       '<td>' 5523030022 '< /td>'
       '< /tr>'
console.log(nuevaFila);

tabla.insertRow
  }


}());
