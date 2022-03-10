$(document).ready(main) 

function main() {

    $('#btnParrafo').click(() => $('#parrafo').prepend('Texto añadido '));
    $('#btnLista').click(() => $('#lista').prepend('<li>Nuevo elemento</li>'));

}


