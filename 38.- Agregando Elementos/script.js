$(document).ready(main) 

function main() {

    //Variables a utilizar
    let textoHtml = "<i>I </i>"; //texto creado con HTML puro
    let textoJQuery = $('<i>Love </i>'); //Texto creado con jQuery
    // let textoJQuery = $('<i></i>').text("I");
    let textoDOM = document.createElement('i');
    textoDOM.appendChild(document.createTextNode("jQuery")); //Texto creado con el DOM de JavaScript

    //Recogemos el parrafo base para mayor simplicidad
    let imagen = $('#img');

    $('#btnAgregar').click(() => { imagen.after(textoHtml, textoJQuery, textoDOM) });

}


