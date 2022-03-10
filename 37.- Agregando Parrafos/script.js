$(document).ready(main) 

function main() {

    //Variables a utilizar
    let parrafoHtml = "<p>Párrafo HTML</p>"; //Párrafo creado con HTML puro
    let parrafoJQuery = $('<p>Párrafo JQuery</p>'); //Párrafo creado con jQuery
    // let parrafoJQuery = $('<p></p>').text("Párrafo JQuery");
    let parrafoDOM = document.createElement('p');
    parrafoDOM.appendChild(document.createTextNode("Párrafo DOM JavaScript")); //Párrafo creado con el DOM de JavaScript

    
    /**
     * btn1 = Carga un párrafo mediante HTML
     * btn2 = Carga un párrafo mediante jQuery
     * btn3 = Carga un párrafo mediante DOM JavaScript
     */

    //Recogemos el parrafo base para mayor simplicidad
    let parrafo = $('#parrafo');

    $('#btn1').click(() => { parrafo.after(parrafoHtml) });
    $('#btn2').click(() => { parrafo.after(parrafoJQuery) });
    $('#btn3').click(() => { parrafo.after(parrafoDOM) });

}


