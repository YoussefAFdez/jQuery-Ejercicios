$(document).ready(main) 

function main() {

    $('#btnParrafo').click(() => $('#parrafo').append(' Texto añadido'));
    $('#btnLista').click(() => $('#lista').append('<li>Nuevo elemento</li>'));

}


