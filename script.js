//file:///Users/brayanmontoya/Desktop/PWDC/mi_primera_web/index1.html
//alert ("Hola este es mi Javascript")

let nombre = "Brayan Montoya";

//console.log(nombre);

let contenidoTitulo = nombre;

let titulo = document.querySelector(".logo.fuente-")

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == nombre) {
    titulo.innerHTML = "Otro";
} else {
    console.log("no se cumple");
}