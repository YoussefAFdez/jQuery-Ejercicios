$(document).ready(main) 

function main() {
    /**
     * btn1 = Establece un texto fijo a un párrafo
     * btn2 = Pone en negrita el texto del párrafo
     * btn3 = Establece un value a un textbox
     */

    $('#btn1').click(() => $('#parrafo').text('Hola Mundo'));
    $('#btn2').click(() => $('#parrafo').html('<b>' + $('#parrafo').html() + '</b>'));
    // $('#btn2').click(() => $('#parrafo').css('font-weight', 'bold'));
    $('#btn3').click(() => $('#tbTexto').val('Hola Mundo'));

}


