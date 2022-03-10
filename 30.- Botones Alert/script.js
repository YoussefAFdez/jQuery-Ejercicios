$(document).ready(main) 

function main() {
    /**
     * btn1 = Carga un alert con el contenido del parrafo
     * btn2 = Carga un alert con el HTML del parrafo
     * btn3 = Carga un alert con el value de un textbox
     * btn4 = Carta un alert con el contenido del enlace
     */

    $('#btn1').click(() => alert($('#sinopsis').text()));
    $('#btn2').click(() => alert($('#sinopsis').prop('outerHTML')));
    $('#btn3').click(() => alert($('#tbTexto').val()));
    $('#btn4').click(() => alert($('#lnHobbit').prop('href')));

}


